import { checkUserId, INVALID_CREDENTIALS } from '@binarystash/common'
import { ForbiddenError } from 'apollo-server-express'
import { hashPassword, logger } from 'scotts_utilities'
import * as uuid from 'uuid/v4'
import { MutationResolvers, QueryResolvers } from '../../generated/graphqlgen'
import { Context } from '../../tstypes'

export const resolvers = {
    Query: {
        async fetchCommentAPI(
            _: any,
            { id }: QueryResolvers.ArgsFetchCommentAPI,
            { db, session }: Context,
        ) {
            try {
                const userId = checkUserId(session)

                const owner = await db.commentAPI({ id }).owner()

                if (owner.id !== userId) {
                    return new ForbiddenError(INVALID_CREDENTIALS)
                }

                const api = await db.commentAPI({ id })

                console.log('API', api)

                return api
            } catch (error) {
                logger('Fetch Comment API').error({
                    level: '5',
                    message: error,
                })
                return error
            }
        },
        async fetchCommentAPIs(_: any, __: any, { db, session }: Context) {
            try {
                let userId: string

                if (session.userId) {
                    userId = session.userId
                } else if (session.decodedUser) {
                    userId = session.decodedUser.id
                } else {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                const response = await db.commentAPIs({
                    where: {
                        owner: {
                            id: userId,
                        },
                    },
                })

                return response
            } catch (error) {
                logger('Create Comment API').error({
                    level: '5',
                    message: error,
                })
                return error
            }
        },
    },
    Mutation: {
        async updateCommentAPI(
            _: any,
            { id }: MutationResolvers.ArgsUpdateCommentAPI,
            { db, session }: Context,
        ) {
            try {
                let userId = checkUserId(session)

                const owner = await db.commentAPI({ id }).owner()

                if (owner.id !== userId) {
                    return new ForbiddenError(INVALID_CREDENTIALS)
                }

                return db.updateCommentAPI({
                    where: {
                        id,
                    },
                    data: {},
                })
            } catch (error) {
                return logger('Create Comment API').error({
                    level: '5',
                    message: error,
                })
            }
        },
        async createCommentApi(
            _: any,
            { name }: MutationResolvers.ArgsCreateCommentApi,
            { db, session }: Context,
        ) {
            try {
                let userId: string

                console.log('USERID', session)

                if (session.userId) {
                    userId = session.userId
                } else if (session.decodedUser) {
                    userId = session.decodedUser.id
                } else {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                const consumerKey = uuid()
                const privateKey = uuid()

                const hashKey = await hashPassword(privateKey, 10)

                const commentAPI = await db.createCommentAPI({
                    name,
                    owner: {
                        connect: {
                            id: userId,
                        },
                    },
                    consumerKey,
                    privateKey: hashKey,
                })

                return {
                    commentAPI,
                    privateKey,
                }
            } catch (error) {
                logger('Create Comment API').error({
                    level: '5',
                    message: error,
                })

                return error
            }
        },
    },
}
