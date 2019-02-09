import { ApolloError } from 'apollo-server-express'
import { omit } from 'lodash'
import { logger } from 'scotts_utilities'
import {
    QueryResolvers,
    SubscriptionResolvers,
} from '../../generated/graphqlgen'
import { Context } from '../../tstypes'

export const resolvers = {
    Subscription: {
        friendSubscription: {
            subscribe(
                _: any,
                { id }: SubscriptionResolvers.ArgsFriendSubscription,
                ctx: Context,
            ) {
                try {
                    return ctx.db.$subscribe.user({
                        mutation_in: ['UPDATED'],
                        node: {
                            id,
                        },
                    })
                } catch (error) {
                    logger('Friend Subscription').error({
                        level: '5',
                        message: error,
                    })
                    return error
                }
            },
            resolve: (payload: any) => payload,
        },
        friendRequestSubscription: {
            subscribe(
                _: any,
                { id }: SubscriptionResolvers.ArgsFriendRequestSubscription,
                { db }: Context,
            ) {
                try {
                    console.log('CONNECTING')
                    return db.$subscribe.user({
                        mutation_in: ['CREATED', 'UPDATED'],
                        node: {
                            id,
                        },
                    })
                } catch (error) {
                    logger('Friend Request Subscription').error({
                        level: '5',
                        message: error,
                    })
                    return error
                }
            },
            resolve: (payload: any) => {
                console.log('FRIEND SUBSCRIPTION', payload)
                return payload
            },
        },
    },
    Query: {
        async queryUsers(_: any, __: any, { db }: Context) {
            try {
                return await db.users({})
            } catch (error) {
                return logger('Query Users').error({ level: 5, message: error })
            }
        },
        async getProfile(
            _: any,
            { username }: QueryResolvers.ArgsGetProfile,
            { db, session }: Context,
        ) {
            try {
                const profile = await db.user({ username })

                if (!profile) {
                    return new ApolloError('No such user')
                }

                const blockedUsers = await db.user({ username }).blockedUsers()

                const blocked = blockedUsers.find(
                    user => user.id === session.userId,
                )

                if (blocked) {
                    const avatar_url = await db.user({ username }).avatar_url()
                    return {
                        errors: {
                            message: 'This user has blocked you',
                            username: profile.username,
                            avatar_url,
                        },
                    }
                }

                const friends = await db.user({ username }).friends()

                if (profile.private && profile.id !== session.userId) {
                    const friend = friends.find(
                        friend => friend.id === session.userId,
                    )

                    if (friend) {
                        return omit(profile, 'password')
                    } else {
                        const avatar_url = await db
                            .user({ username })
                            .avatar_url()
                        return {
                            errors: {
                                message: 'Account is private',
                                username: profile.username,
                                avatar_url,
                            },
                        }
                    }
                }

                return { user: omit(profile, 'password') }
            } catch (error) {
                logger('Get Profile').error({ level: '5', message: error })
                return error
            }
        },
    },
}
