import { INVALID_CREDENTIALS } from '@binarystash/common'
import { ForbiddenError } from 'apollo-server'
import { logger } from 'scotts_utilities'
import { ResolverMap } from '../../../tstypes'

export const resolvers: ResolverMap = {
    Query: {
        async currentUser(_: any, __: any, { session, db }): Promise<any> {
            try {
                let userId
                console.log('CURRENT_USER_SESSION', session)
                if (session) {
                    if (session.decodedUser) {
                        userId = session.decodedUser
                    } else if (session.userId) {
                        userId = session.userId
                    }
                }

                if (userId == undefined) {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                return await db.user({ id: userId })
            } catch (error) {
                logger('Current User').error({ level: '', message: error })
                return error
            }
        },
    },
}
