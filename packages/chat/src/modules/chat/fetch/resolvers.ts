import { logger } from 'scotts_utilities'
import { QueryResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'

export const resolvers = {
    Query: {
        async showChannel(
            _: any,
            { channelId }: QueryResolvers.ArgsShowChannel,
            { db }: Context,
        ) {
            return await db.channel({
                id: channelId,
            })
        },
        async showTeams(
            _: any,
            { authorId }: QueryResolvers.ArgsShowTeams,
            { db, session }: Context,
        ) {
            try {
                const response = await db.teams({
                    where: {
                        OR: [
                            {
                                author: {
                                    id: authorId,
                                },
                            },
                            {
                                members_some: {
                                    id: session.userId,
                                },
                            },
                        ],
                    },
                })

                return response
            } catch (error) {
                return logger('Show Teams').error({
                    level: '5',
                    message: error.message,
                })
            }
        },
        async showTeam(
            _: any,
            { teamSlug }: QueryResolvers.ArgsShowTeam,
            { db }: Context,
        ) {
            try {
                const team = await db.team({
                    slug: teamSlug,
                })

                return team
            } catch (error) {
                return logger('Show Team').error({
                    level: '5',
                    message: error.message,
                })
            }
        },
        // async showChannels(_: any, {teamId}: any, {db}: Context, info: any) {
        // 	try {
        // 		return await db.query.channels({
        // 			where: {

        // 			}
        // 		})
        // 	} catch (error) {

        // 	}
        // }
    },
}
