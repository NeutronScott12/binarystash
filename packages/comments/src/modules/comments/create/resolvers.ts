import { ApolloError, ForbiddenError } from 'apollo-server-express'
import { logger } from 'scotts_utilities'
import { INVALID_CREDENTIALS } from '../../../constants'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Comment } from '../../../generated/prisma-client'
import { Context } from '../../../tstypes'
import winston = require('winston')

export const resolvers = {
    Mutation: {
        async createCommentSection(
            _: any,
            {
                pageId,
                url,
                moderators,
                options,
            }: MutationResolvers.ArgsCreateCommentSection,
            { db, session }: Context,
        ) {
            try {
                let adminId: any

                if (!session.userId) {
                    if (session.decodedUser && session.decodedUser.id)
                        adminId = session.decodedUser.id
                } else {
                    adminId = session.userId
                }

                if (adminId === undefined || adminId === null) {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                const mods = moderators.users.map(u => ({
                    user: {
                        connect: {
                            id: u,
                        },
                    },
                    can_ban: true,
                    can_delete: true,
                    can_edit: true,
                    can_close: true,
                }))

                console.log('MODS', mods)

                const commentSection = await db.createCommentSection({
                    admin: {
                        connect: {
                            id: adminId,
                        },
                    },
                    url,
                    pageId,
                    moderators: {
                        create: mods,
                    },
                    options: {
                        create: {
                            comments_open: options.open,
                        },
                    },
                })

                return commentSection
            } catch (error) {
                return logger('Create Comment Section').error({
                    level: '5',
                    message: error,
                })
            }
        },
        async createReply(
            _: any,
            {
                // pageId,
                body,
                parentId,
                repliedTo,
            }: MutationResolvers.ArgsCreateReply,
            { db, session }: Context,
        ): Promise<Comment | winston.Logger | ApolloError> {
            try {
                if (session.userId || session.decodedUser) {
                    const userID = session.userId
                    let comment: any
                    if (body) {
                        comment = await db.createComment({
                            body,
                            parentId,
                            pageId: '',
                            repliedTo: {
                                connect: {
                                    id: repliedTo || '',
                                },
                            },
                            ratings: {
                                create: {
                                    vote: 0,
                                },
                            },
                            author: {
                                connect: {
                                    id: userID,
                                },
                            },
                        })
                    }

                    if (comment) {
                        await db.updateComment({
                            where: {
                                id: parentId,
                            },
                            data: {
                                replies: {
                                    connect: {
                                        id: comment.id,
                                    },
                                },
                            },
                        })
                    }

                    return comment
                }

                return new ForbiddenError(INVALID_CREDENTIALS)
            } catch (error) {
                return logger('Create Reply').error({
                    level: '5',
                    message: error,
                })
            }
        },
        async createComment(
            _: any,
            {
                pageId,
                body,
                parentId,
                commentSectionId,
            }: MutationResolvers.ArgsCreateComment,
            { db, session }: Context,
        ): Promise<Comment | winston.Logger | ApolloError> {
            try {
                if (session.userId || session.decodedUser) {
                    const userID: string | undefined = session.userId

                    if (body) {
                        const comment = await db.createComment({
                            body,
                            parentId,
                            pageId,
                            repliedTo: {
                                connect: {
                                    id: userID,
                                },
                            },
                            ratings: {
                                create: {
                                    vote: 0,
                                },
                            },
                            author: {
                                connect: {
                                    id: userID,
                                },
                            },
                        })

                        const commentSection = await db.updateCommentSection({
                            where: {
                                id: commentSectionId,
                            },
                            data: {
                                comments: {
                                    connect: {
                                        id: comment.id,
                                    },
                                },
                            },
                        })

                        return comment
                    } else {
                        return new ApolloError('Comment body required')
                    }
                } else {
                    return new ForbiddenError(INVALID_CREDENTIALS)
                }
            } catch (error) {
                return logger('Create Comment').error({
                    level: '5',
                    message: error,
                })
            }
        },
    },
}
