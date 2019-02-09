import { ForbiddenError, ApolloError } from 'apollo-server'
import { INVALID_CREDENTIALS } from '../../../constants'

export const checkComment = (comment: any, session: any) => {
	if (!comment) {
		return new ApolloError(INVALID_CREDENTIALS)
	}

	if (comment.author.id !== session.userId) {
		return new ForbiddenError(INVALID_CREDENTIALS)
	}

	return comment
}
