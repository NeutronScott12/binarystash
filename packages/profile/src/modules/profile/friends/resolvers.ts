import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { logger } from 'scotts_utilities';
import { INVALID_CREDENTIALS } from '../../../constants';
import { MutationResolvers } from '../../../generated/graphqlgen';
import { User } from '../../../generated/prisma-client';
import { Context } from '../../../tstypes';


export const resolvers = {
	Mutation: {
		async friendRemove(
			_: any,
			{ friendId }: MutationResolvers.ArgsFriendRemove,
			{ db, session }: Context
		) {
			try {
				const user = await db.updateUser({
					where: {
						id: session.id
					},
					data: {
						friends: {
							disconnect: {
								id: friendId
							}
						}
					}
				})

				await db.updateUser({
					where: { id: friendId },
					data: {
						friends: {
							disconnect: {
								id: user.id
							}
						}
					}
				})

				return {
					ok: true,
					user
				}
			} catch (error) {
				logger("Friend Remove").error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
		async friendReject(
			_: any,
			{ id }: MutationResolvers.ArgsFriendReject,
			{ db, session }: Context
		) {
			try {
				if (!session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}

				if (id) {
					await db.updateUser({
						where: {
							id: session.userId
						},
						data: {
							friend_requests: {
								disconnect: {
									id
								}
							}
						}
					})

					return {
						ok: true
					}
				} else {
					return new ApolloError('ID is required')
				}
			} catch (error) {
				return logger("Friend Reject").error({ level: '5', message: error })
			}
		},
		async friendRequest(
			_: any,
			{ requestedId }: MutationResolvers.ArgsFriendRequest,
			{ db, session }: Context
		) {
			try {
				if (requestedId == undefined) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				} else if (!session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}

				const requested = await db.user({
					id: requestedId
				})

				const friends = await db
					.user({
						id: requestedId
					})
					.friends()

				const friend_requests = await db
					.user({ id: requestedId })
					.friend_requests()

				if (requested && friends) {
					const found = friends.find(
						(fr: User) => fr.id === requestedId
					)

					if (found !== undefined) {
						return {
							ok: false,
							errors: [
								{
									path: 'friend',
									message: 'Already a friend'
								}
							]
						}
					}
				}

				if (friend_requests.some(fr => fr.id === session.userId)) {
					return {
						ok: false,
						errors: [
							{
								path: 'friend_request',
								message: 'Already a friend request'
							}
						]
					}
				}

				await db.updateUser({
					where: {
						id: requestedId
					},
					data: {
						friend_requests: {
							connect: {
								id: session.userId
							}
						}
					}
				})

				const requester = await db.user({
					id: session.userId
				})

				if (requester) {
					await db.createNotification({
						message: `Friend request from ${requester.username}`,
						friend_requests: {
							connect: {
								id: requester.id
							}
						},
						author: {
							connect: {
								id: requestedId
							}
						}
					})

					return {
						ok: true
					}
				} else {
					throw new ApolloError('Error with friend request')
				}
			} catch (error) {
				logger("Friend Request").error({ level: '5', message: error })
				return {
					ok: true,
					error: [
						{
							path: error.path,
							message: error.message
						}
					]
				}
			}
		},
		async addFriend(
			_: any,
			{ requestedId }: MutationResolvers.ArgsAddFriend,
			{ db, session }: Context
		) {
			try {
				await db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						friends: {
							connect: {
								id: requestedId
							}
						}
					}
				})

				const requestedUser = await db.updateUser({
					where: {
						id: requestedId
					},
					data: {
						friends: {
							connect: {
								id: session.userId
							}
						}
					}
				})

				if (requestedUser) {
					await db.createNotification({
						message: `Friend request accepted from ${
							requestedUser.username
						}`,
						friend: {
							connect: {
								id: requestedId
							}
						},
						author: {
							connect: {
								id: requestedUser.id
							}
						}
					})
				}

				await db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						friend_requests: {
							disconnect: {
								id: requestedId
							}
						}
					}
				})

				const user = await db.user({
					id: requestedId
				})

				return {
					ok: true,
					errors: [],
					user
				}
			} catch (error) {
				logger("Add Friend").error({ level: '5', message: error })
				return {
					ok: false,
					error: [
						{
							path: error.path,
							message: error.message
						}
					]
				}
			}
		}
	}
}
