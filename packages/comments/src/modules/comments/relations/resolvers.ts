import { logger } from 'scotts_utilities'
import { Context } from '../../../tstypes'

export const resolvers = {
    Rating: {
        author(parent: any, _: any, { db }: Context) {
            try {
                return db.rating({ id: parent.id }).author()
            } catch (error) {
                return logger('').error({ level: '5', message: error })
            }
        },
    },
    Comment: {
        async author(parent: any, _: any, { db }: Context) {
            try {
                const commentAuthor = await db
                    .comment({ id: parent.id })
                    .author()

                return commentAuthor
            } catch (error) {
                return logger('').error({ level: '5', message: error })
            }
        },
        async ratings(parent: any, _: any, { db }: Context) {
            try {
                return await db.comment({ id: parent.id }).ratings()
            } catch (error) {
                return logger('').error({ level: '5', message: error })
            }
        },
        replies(parent: any, _: any, { db }: Context) {
            try {
                return db.comment({ id: parent.id }).replies()
            } catch (error) {
                return logger('').error({ level: '5', message: error })
            }
        },
        async repliedTo(parent: any, _: any, { db }: Context) {
            try {
                console.log('PARENT', parent)

                const response = await db.comment({ id: parent.id }).repliedTo()

                console.log('RESPONSE', response)
                return response
            } catch (error) {
                console.log('ERROR', error)
                return logger('').error({ level: '5', message: error })
            }
        },
    },
}
