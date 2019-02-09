import { INVALID_CREDENTIALS } from '@binarystash/common'
import { ApolloError, ForbiddenError } from 'apollo-server-express'
import { logger, sluggify } from 'scotts_utilities'
import * as shortid from 'shortid'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'

export const resolvers = {
    Mutation: {
        async createMessage(
            _: any,
            { body, channelId }: MutationResolvers.ArgsCreateMessage,
            { db, session }: Context,
        ) {
            try {
                const channelAuthor = await db
                    .channel({
                        id: channelId,
                    })
                    .author()

                const channelMember = await db
                    .channel({
                        id: channelId,
                    })
                    .members({
                        where: {
                            id: session.userId,
                        },
                    })

                const member = channelMember[0]
                console.log('working', member)

                if (
                    (member !== undefined &&
                        member.id !== undefined &&
                        member.id === session.userId) ||
                    channelAuthor.id === session.userId
                ) {
                    console.log('author', channelAuthor)
                    const newMessage = await db.createMessage({
                        body,
                        parentId: channelId,
                        url: '',
                        filetype: '',
                        author: {
                            connect: {
                                id: session.userId,
                            },
                        },
                    })

                    console.log('NEW', newMessage)

                    await db.updateChannel({
                        where: {
                            id: channelId,
                        },
                        data: {
                            messages: {
                                connect: {
                                    id: newMessage.id,
                                },
                            },
                        },
                    })

                    return newMessage
                } else {
                    throw new ApolloError(INVALID_CREDENTIALS)
                }
            } catch (error) {
                return logger('Create Message').error({
                    level: '5',
                    message: error.message,
                })
            }
        },
        async createChannel(
            _: any,
            { name, teamId }: MutationResolvers.ArgsCreateChannel,
            { db, session }: Context,
        ) {
            try {
                if (!teamId) {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                const member = db.team({ id: teamId }).members({
                    where: {
                        id: session.userId,
                    },
                })

                if (!member) {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                const channel = await db.createChannel({
                    name,
                    slug: `${sluggify(name)}-${shortid()}`,
                    teamId,
                    author: {
                        connect: {
                            id: session.userId,
                        },
                    },
                })

                if (!channel.id) {
                    throw new ApolloError('No Channel')
                }

                await db.updateTeam({
                    data: {
                        channels: {
                            connect: {
                                id: channel.id,
                            },
                        },
                    },

                    where: {
                        id: teamId,
                    },
                })

                return channel
            } catch (error) {
                return logger('Create Channel').error({
                    level: '5',
                    message: error.message,
                })
            }
        },
        async createTeam(
            _: any,
            { name }: MutationResolvers.ArgsCreateTeam,
            { db, session }: Context,
        ) {
            try {
                const team = await db.createTeam({
                    name: `${name}`,
                    slug: `${sluggify(name)}-${shortid()}`,
                    author: {
                        connect: {
                            id: session.userId,
                        },
                    },
                })

                const generalChannel = await db.createChannel({
                    name: `General`,
                    slug: `general-${shortid()}`,
                    teamId: team.id,
                    author: {
                        connect: {
                            id: session.userId,
                        },
                    },
                })

                const updateTeam = await db.updateTeam({
                    where: {
                        id: team.id,
                    },
                    data: {
                        channels: {
                            connect: {
                                id: generalChannel.id,
                            },
                        },
                    },
                })

                return updateTeam
            } catch (error) {
                return logger('Create Team').error({
                    level: '5',
                    message: error.message,
                })
            }
        },
    },
}
