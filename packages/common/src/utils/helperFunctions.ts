import { Response } from 'express'
import { v4 as uuid } from 'uuid'
import { S3 } from 'aws-sdk'
import { stringType } from 'aws-sdk/clients/iam'

export const respond = (
	res: Response,
	status: number,
	boolean: boolean,
	data: Object | null
) => {
	return res.status(status).json({
		success: boolean,
		result: data
	})
}

interface IProcessUpload {
	filename: stringType
	mimetype: stringType
	encoding: stringType
	key: string
	url: string
	Etag: string
}

export const filteredBody = (body: any, whitelist: []) => {
	const items: any = {}

	Object.keys(body).forEach((key: any) => {
		// @ts-ignore
		if (whitelist.indexOf(key) >= 0) {
			items[key] = body[key]
		}
	})

	return items
}

// export const parseErrors = ({ errors }) => {
// 	const response = {}
// 	const result = forIn(errors, (key, value) => {
// 		response[value] = pick(key, ['path', 'message'])
// 	})
// 	return response
// }

export const processUpload = async (
	s3: S3,
	picture: string,
	folder: string
): Promise<IProcessUpload> => {
	const {
		createReadStream,
		filename,
		mimetype,
		encoding
	}: any = await picture
	const key = folder + '/' + uuid() + '-' + filename

	const stream = createReadStream()

	const response = await s3
		.upload({
			Bucket: process.env.AWS_BUCKET || 'mainhubbucket',
			Key: key,
			ACL: 'public-read',
			Body: stream
		})
		.promise()

	return {
		filename,
		mimetype,
		encoding,
		key: response.Key,
		url: response.Location,
		Etag: response.ETag
	}
}

// export class FetchError extends Error {
// 	constructor(details, ...params) {
// 		super(...params)

// 		if (Error.captureStackTrace) {
// 			Error.captureStackTrace(this, FetchError)
// 		}

// 		this.path = details

// 		this.date = new Date()
// 	}
// }

// export const parseErrors = ({ errors }) => {
// 	const response = []
// 	forIn(errors, (key, value) => {
// 		response.push(pick(key, ['path', 'message']))
// 	})
// 	return {
// 		ok: false,
// 		errors: response
// 	}
// }

// export const errorResponse = errors => {
// 	console.log('ERRORS', errors)
// 	if (errors instanceof Error.ValidationError) {
// 		return parseErrors(errors)
// 	} else if (errors instanceof Error.ValidatorError) {
// 		return parseErrors(errors)
// 	} else if (errors instanceof FetchError) {
// 		return errors.path
// 	} else {
// 		return {
// 			ok: false,
// 			result: 'error',
// 			errors: [{ path: 'Server', message: 'Something went wrong' }]
// 		}
// 	}
// }
