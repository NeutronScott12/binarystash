import { INVALID_CREDENTIALS } from '@binarystash/common'
import { ForbiddenError } from 'apollo-server-express'
import { logger } from 'scotts_utilities'
import { Context } from '../../tstypes'

export const resolvers = {
    Query: {
        async fetchApiServices(_: any, __: any, { session, db }: Context) {
            try {
                return db.aPIServices({
                    where: {
                        owner: {
                            id: session.userId,
                        },
                    },
                })
            } catch (error) {
                logger('Fetch API Products').error({
                    level: '5',
                    message: error.message,
                })

                return error
            }
        },
        async fetchApiService(_: any, args: any, { db }: Context) {
            try {
                return db.aPIService({ id: args.id })
            } catch (error) {
                logger('Fetch API Product').error({
                    level: '5',
                    message: error.message,
                })

                return error
            }
        },
    },
    Mutation: {
        async createApiService(_: any, args: any, { session, db }: Context) {
            try {
                if (
                    session.userId !== undefined ||
                    session.decodedUser !== undefined
                ) {
                    return db.createAPIService({
                        name: args.name,
                        owner: {
                            connect: {
                                id: (session.userId ||
                                    session.decodedUser) as any,
                            },
                        },
                    })
                } else {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }
            } catch (error) {
                logger('Create API Product').error({
                    level: '5',
                    message: error.message,
                })

                return error
            }
        },
    },
}
