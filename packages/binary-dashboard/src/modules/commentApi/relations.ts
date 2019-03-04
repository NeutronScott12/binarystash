import { logger } from 'scotts_utilities'
import { Context } from './../../tstypes/index'
export const resolvers = {
    CommentAPI: {
        owner(parent: any, _: any, { db }: Context) {
            try {
                return db.commentAPI({ id: parent.id }).owner()
            } catch (error) {
                return logger('Comment API Onwer Relation').error({
                    level: '5',
                    message: error,
                })
            }
        },
        commentSections(parent: any, _: any, { db }: Context) {
            try {
                return db.commentAPI({ id: parent.id }).commentSections()
            } catch (error) {
                return logger('Comment API Comment Section Relation').error({
                    level: '5',
                    message: error,
                })
            }
        },
    },
}
