import { ApolloError, ForbiddenError } from 'apollo-server-express'
import { logger } from 'scotts_utilities'
import { INVALID_CREDENTIALS } from '../../constants'
import {
    MutationResolvers,
    QueryResolvers,
    SubscriptionResolvers,
} from '../../generated/graphqlgen'
import { CommentConnection } from '../../generated/prisma-client'
import { Context, DeleteCommentResponse } from '../../tstypes'
import winston = require('winston')

type CommentResponse = CommentConnection | winston.Logger | ApolloError

export const resolvers = {
    Subscription: {
        newCommentSubscription: {
            subscribe(
                _: any,
                args: SubscriptionResolvers.ArgsNewCommentSubscription,
                ctx: Context,
            ) {
                try {
                    return ctx.db.$subscribe.comment({
                        mutation_in: ['CREATED'],
                        node: {
                            AND: {
                                pageId: args.pageId,
                            },
                        },
                    })
                } catch (error) {
                    return logger('New Comment Subscription').error({
                        level: '5',
                        message: error,
                    })
                }
            },
            resolve: (payload: any) => {
                return payload
            },
        },
    },

    Query: {
        async queryComment(
            _: any,
            { parentId, offset, limit }: QueryResolvers.ArgsQueryComment,
            { db }: Context,
        ): Promise<CommentResponse> {
            try {
                return await db.commentsConnection({
                    where: {
                        pageId: parentId,
                    },
                    skip: offset || 0,
                    first: limit || 10,
                    orderBy: 'createdAt_DESC',
                })
            } catch (error) {
                return logger('Query Comment').error({
                    level: '5',
                    message: error,
                })
            }
        },
    },
    Mutation: {
        async deleteComment(
            _: any,
            { id }: MutationResolvers.ArgsDeleteComment,
            { db, session }: Context,
        ): Promise<DeleteCommentResponse | CommentResponse> {
            try {
                const comment = await db.comment({
                    id,
                })

                const author = await db
                    .comment({
                        id,
                    })
                    .author()

                if (!comment) {
                    return new ApolloError(INVALID_CREDENTIALS)
                }

                if (author.id !== session.userId) {
                    return new ForbiddenError(INVALID_CREDENTIALS)
                }

                await db.deleteComment({
                    id: comment.id,
                })

                return comment
            } catch (error) {
                return logger('Delete Comment').error({
                    level: '5',
                    message: error,
                })
            }
        },
        async editComment(
            _: any,
            { id, body }: MutationResolvers.ArgsEditComment,
            { db, session }: Context,
        ): Promise<any | CommentResponse> {
            try {
                const comment = await db.comment({
                    id,
                })

                const author = await db
                    .comment({
                        id,
                    })
                    .author()

                if (!comment) {
                    return new ApolloError(INVALID_CREDENTIALS)
                }

                if (author.id !== session.userId) {
                    return new ForbiddenError(INVALID_CREDENTIALS)
                }

                return await db.updateComment({
                    where: {
                        id: comment.id,
                    },
                    data: {
                        body,
                    },
                })
            } catch (error) {
                return logger('Edit Comment').error({
                    level: '5',
                    message: error,
                })
            }
        },
        async likeComment(
            _: any,
            { commentId }: MutationResolvers.ArgsLikeComment,
            { db, session }: Context,
        ): Promise<any | CommentResponse> {
            try {
                if (session.userId || session.decodedUser) {
                    const userID = session.userId

                    const comment: any = await db.comment({
                        id: commentId,
                    })

                    if (comment) {
                        const ratings = await db
                            .comment({ id: commentId })
                            .ratings()

                        if (ratings) {
                            const rating = await db
                                .rating({ id: ratings.id })
                                .author()

                            const found = rating.find(
                                (author: any) => author.id === userID,
                            )

                            if (found === undefined) {
                                return await db.updateComment({
                                    data: {
                                        ratings: {
                                            update: {
                                                vote: ratings.vote + 1,
                                                author: {
                                                    connect: {
                                                        id: userID,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    where: {
                                        id: comment.id,
                                    },
                                })
                            }
                        } else {
                            return new ApolloError('No comment author')
                        }
                    } else {
                        return new ApolloError('No such comment')
                    }
                    return comment
                } else {
                    return new ForbiddenError(INVALID_CREDENTIALS)
                }
            } catch (error) {
                return logger('Like Comment').error({
                    level: '5',
                    message: error,
                })
            }
        },
    },
}
