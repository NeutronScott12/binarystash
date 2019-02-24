import { logger } from 'scotts_utilities'
import { QueryResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'

export const resolvers = {
    Query: {
        async fetchCommentSection(
            _: any,
            { pageId }: QueryResolvers.ArgsFetchCommentSection,
            { db }: Context,
        ) {
            try {
                const fetch = await db.commentSection({
                    pageId,
                })

                return fetch
            } catch (error) {
                return logger('Fetch Comment Section').error({
                    level: '5',
                    message: error,
                })
            }
        },
    },
}
