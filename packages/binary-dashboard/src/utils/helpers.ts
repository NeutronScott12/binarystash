import { INVALID_CREDENTIALS } from '@binarystash/common'
import { ForbiddenError } from 'apollo-server-express'

export const checkUserId = (session: Express.Session): string => {
    if (session.userId) {
        return session.userId
    } else if (session.decodedUser) {
        return session.decodedUser.id
    } else {
        throw new ForbiddenError(INVALID_CREDENTIALS)
    }
}
