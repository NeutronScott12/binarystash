import { FORGOT_PASSWORD_PREFIX } from '@binarystash/common'
import { Redis } from 'ioredis'
import { createTransport } from 'nodemailer'
import { createToken, logger } from 'scotts_utilities'

const sgTransport = require('nodemailer-sendgrid-transport')

// const sgTransport = require('nodemailer-sendgrid-transport')

const from = 'Experimental website <scottberry91@gmail.com>'

const {
    PRODUCTION_CLIENT_URL = 'https://inspiring-euler-247a1c.netlify.com',
    DEVELOPMENT_CLIENT_URL = 'http://localhost:1234',
} = process.env

const client =
    process.env.NODE_ENV === 'production'
        ? PRODUCTION_CLIENT_URL
        : DEVELOPMENT_CLIENT_URL

interface EmailArgs {
    id: string
    username: string
    email: string
}

interface Email {
    from: string
    to: string
    subject: string
    html: string
}

const generateConfirmationUrl = async (
    { id, username, email }: EmailArgs,
    url: string,
): Promise<string> => {
    try {
        const [token]: string[] = await createToken(
            { id, username, email },
            'secret',
            { expiresIn: '24h' },
        )

        const link: string = `${client || url}/auth/confirmation?t=${token}`

        return link
    } catch (error) {
        logger('Generate Confirmation URL').error({
            level: '5',
            message: error,
        })
        return error
    }
}

const generateResetPasswordLink = async (
    { id, username, email }: EmailArgs,
    url: string,
): Promise<string> => {
    try {
        const [token]: string[] = await createToken(
            { id, username, email },
            'secret',
            { expiresIn: '24h' },
        )

        const link: string = `${client || url}/auth/reset_password?t=${token}`

        return link
    } catch (error) {
        logger('Generate Reset Password Link').error({
            level: '5',
            message: error,
        })
        return error
    }
}

const setup = () => {
    if (process.env.NODE_ENV === 'production') {
        return createTransport(
            sgTransport({
                auth: {
                    api_key: process.env.SENDGRID_PASSWORD,
                    api_user: process.env.SENDGRID_USERNAME,
                },
            }),
        )
    } else {
        return createTransport({
            host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
            port: process.env.EMAIL_PORT || 2525,
            auth: {
                user: process.env.EMAIL_USER || '984c1182cd3546',
                pass: process.env.EMAIL_PASS || 'c468fcdc66d05b',
            },
        } as any)
    }
}

export const sendConfirmationEmail = async (
    user: EmailArgs,
    url: string,
): Promise<any> => {
    try {
        const transport = setup()
        const emailUrl = await generateConfirmationUrl(user, url)

        const email: Email = {
            from,
            to: user.email,
            subject: 'Thanks for signing up',
            html: `
            <h1>Welcome, please click link to confirm</h1>

            <a href="${emailUrl}">Confirmation Link</p>
        `,
        }

        transport.sendMail(email)
    } catch (error) {
        logger('Send Confirmation Email').error({ level: '5', message: error })
        return error
    }
}

export const sendResetPasswordEmail = async (
    user: EmailArgs,
    redis: Redis,
    url: string,
): Promise<any> => {
    try {
        const transport = setup()

        await redis.set(
            `${FORGOT_PASSWORD_PREFIX}${user.id}`,
            user.id,
            'ex',
            60 * 20,
        )

        const email: Email = {
            from,
            to: user.email,
            subject: 'Reset Password',
            html: `
				To reset password follow this link

				<a href="${await generateResetPasswordLink(user, url)}">Reset Link</a>
			`,
        }

        transport.sendMail(email)
    } catch (error) {
        logger('Send Reset Password Email').error({
            level: '5',
            message: error,
        })
    }
}
