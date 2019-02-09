// import { map } from 'bluebird'
import { INVALID_CREDENTIALS } from '@binarystash/common'
import { ForbiddenError } from 'apollo-server-express'
import { logger } from 'scotts_utilities'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'

export const resolvers = {
    Mutation: {
        async removeTeamMember(
            _: any,
            { userId, teamId }: any,
            { db, session }: Context,
        ) {
            try {
                const admin = await db.team({ id: teamId }).author()

                if (session.userId === admin.id) {
                    // const channels = await db.team({ id: teamId }).channels()

                    // await map(channels, async channel => {
                    // 	await db.updateChannel({
                    // 		where: { id: channel.id },
                    // 		data: {
                    // 			members: {
                    // 				disconnect: {
                    // 					id: userId
                    // 				}
                    // 			}
                    // 		}
                    // 	})
                    // })

                    return db.updateTeam({
                        where: { id: teamId },
                        data: {
                            members: {
                                disconnect: {
                                    id: userId,
                                },
                            },
                        },
                    })
                } else {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }
            } catch (error) {
                logger('Remove Team Member').error({
                    level: '3',
                    message: 'Team not found',
                })
                throw new ForbiddenError(INVALID_CREDENTIALS)
            }
        },
        async removeChannelMember(
            _: any,
            { userId, channelId }: MutationResolvers.ArgsRemoveChannelMember,
            { db, session }: Context,
        ) {
            try {
                const channel = await db.channel({
                    id: channelId,
                })

                const author = await db
                    .channel({
                        id: channelId,
                    })
                    .author()

                if (channel != undefined) {
                    if (
                        author.id === session.userId ||
                        userId === session.userId
                    ) {
                        return await db.updateChannel({
                            where: {
                                id: channelId,
                            },
                            data: {
                                members: {
                                    disconnect: {
                                        id: userId,
                                    },
                                },
                            },
                        })
                    } else {
                        logger('Remove Channel Member').error({
                            level: '3',
                            message: INVALID_CREDENTIALS,
                        })
                        throw new ForbiddenError(INVALID_CREDENTIALS)
                    }
                } else {
                    logger('Remove Channel Member').error({
                        level: '3',
                        message: 'Channel not found',
                    })
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }
            } catch (error) {
                return logger('Remove Channel Member').error({
                    level: '5',
                    message: error.message,
                })
            }
        },
    },
}
