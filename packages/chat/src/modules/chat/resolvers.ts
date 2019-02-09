import { INVALID_CREDENTIALS } from "@binarystash/common";
import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { logger } from 'scotts_utilities';
import { MutationResolvers, SubscriptionResolvers } from '../../generated/graphqlgen';
import { Context } from '../../tstypes';

export const resolvers = {
	Subscription: {
		messageSubscription: {
			subscribe(
				_: any,
				{ channelId }: SubscriptionResolvers.ArgsMessageSubscription,
				{ db }: Context
			) {
				try {
					console.log('MESSAGE SUBSCRIPTION')
					return db.$subscribe.message({
						mutation_in: ['CREATED', 'UPDATED'],
						node: {
							parentId: channelId
						}
					})
				} catch (err) {
					console.log(err)
					return err
				}
			},
			resolve: (payload: any) => {
				console.log('payload', payload)

				return payload
			}
		}
	},

	Mutation: {
		async addTeamMember(
			_: any,
			{ userId, teamId }: MutationResolvers.ArgsAddTeamMember,
			{ db, session }: Context
		) {
			console.log('USERID', userId)
			console.log('TEAMID', teamId)
			try {
				const team = await db.team({
					id: teamId
				})

				const generalChannel = await db
					.team({
						id: teamId
					})
					.channels()

				const author = await db
					.team({
						id: teamId
					})
					.author()

				if (team && author.id !== session.userId) {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}

				const user = await db.user({
					id: userId
				})

				console.log('TEAM', team)
				console.log('USER', user)

				if (user && team) {
					const response = await db.updateTeam({
						data: {
							members: {
								connect: {
									id: user.id
								}
							}
						},
						where: {
							id: team.id
						}
					})

					const general = await db.channels({
						where: {
							teamId
						}
					})

					await db.updateChannel({
						where: {
							id: general[0].id
						},
						data: {
							members: {
								connect: {
									id: user.id
								}
							}
						}
					})

					await db.createNotification({
						message: `${
							author.username
						} has added you to chat team ${team.slug}/${
							generalChannel[0].slug
						}`,
						channel: {
							connect: {
								id: general[0].id
							}
						},
						team: {
							connect: {
								id: team.id
							}
						},
						author: {
							connect: {
								id: userId
							}
						}
					})

					return response
				} else {
					return new ApolloError('Error: Unable to perform action')
				}
			} catch (error) {
				return logger("Add Team Member").error({ level: '5', message: error.message })
			}
		},
		async addChannelMember(
			_: any,
			{ userId, channelId }: MutationResolvers.ArgsAddChannelMember,
			{ db, session }: Context
		) {
			console.log('USERID', userId)
			console.log('CHANNELID', channelId)

			try {
				const channel = await db.channel({
					id: channelId
				})

				const author = await db
					.channel({
						id: channelId
					})
					.author()

				if (channel && author.id === session.userId) {
					const user = await db.user({
						id: userId
					})

					if (user) {
						const response = await db.updateChannel({
							where: {
								id: channelId
							},
							data: {
								members: {
									connect: {
										id: user.id
									}
								}
							}
						})

						const team = await db.team({
							id: channel.teamId
						})

						await db.createNotification({
							message: `You have been added to ${channel.name}`,
							channel: {
								connect: {
									id: channel.id
								}
							},
							team: {
								connect: {
									id: team.id
								}
							},
							author: {
								connect: {
									id: user.id
								}
							}
						})

						return response
					} else {
						throw new ApolloError('Error: no such member')
					}
				} else {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				return logger("Add Channel Member").error({ level: '5', message: error.message })
			}
		}
	}
}
