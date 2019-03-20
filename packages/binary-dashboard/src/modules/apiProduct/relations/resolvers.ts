import { logger } from 'scotts_utilities'
import { Context } from '../../../tstypes'

export const resolvers = {
    APIService: {
        owner(parent: any, _: any, { db }: Context) {
            try {
                return db.aPIService({ id: parent.id }).owner()
            } catch (error) {
                logger('Product API Owner Relation').error({
                    level: '5',
                    message: error,
                })
                return error
            }
        },
        commentAPIs(parent: any, _: any, { db }: Context) {
            try {
                return db.aPIService({ id: parent.id }).commentAPIs()
            } catch (error) {
                logger('Product API Product Relation').error({
                    level: '5',
                    message: error,
                })
                return error
            }
        },
    },
}
