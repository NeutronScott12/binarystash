import { ApolloError } from 'apollo-server-express'
import { logger } from 'scotts_utilities'
import { Context } from '../../tstypes'

export const resolvers = {
    Notification: {
        team(parent: any, _: any, { db }: Context) {
            try {
                return db.notification({ id: parent.id }).team()
            } catch (error) {
                logger('Notification Team relation').error({
                    level: '5',
                    message: error,
                })
                return new ApolloError(error)
            }
        },
        channel(parent: any, _: any, { db }: Context) {
            try {
                return db.notification({ id: parent.id }).channel()
            } catch (error) {
                logger('Nofitication Channel relation').error({
                    level: '5',
                    message: error,
                })
                return new ApolloError(error)
            }
        },
        author(parent: any, _: any, { db }: Context) {
            try {
                return db.notification({ id: parent.id }).author()
            } catch (error) {
                logger('Notification author relation').error({
                    level: '5',
                    message: error,
                })
                return new ApolloError(error)
            }
        },
        friend(parent: any, _: any, { db }: Context) {
            try {
                return db.notification({ id: parent.id }).friend()
            } catch (error) {
                logger('Notification friend relation').error({
                    level: '5',
                    message: error,
                })
                return new ApolloError(error)
            }
        },
        friend_requests(parent: any, _: any, { db }: Context) {
            try {
                return db.notification({ id: parent.id }).friend_requests()
            } catch (error) {
                logger('Notification friend request relation').error({
                    level: '5',
                    message: error,
                })
                return new ApolloError(error)
            }
        },
        comments(parent: any, _: any, { db }: Context) {
            try {
                return db.notification({ id: parent.id }).comments()
            } catch (error) {
                logger('Notification comments relation').error({
                    level: '5',
                    message: error,
                })
                return new ApolloError(error)
            }
        },
    },
}
