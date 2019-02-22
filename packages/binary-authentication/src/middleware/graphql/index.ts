import { isAuthenticated } from '@binarystash/common'
import { IMiddlewareGenerator } from 'graphql-middleware'
import { shield } from 'graphql-shield'

export const permissions: IMiddlewareGenerator<any, any, any> = shield({
    Query: {
        getProfile: isAuthenticated,
    },
    Mutation: {
        addFriend: isAuthenticated,
        friendReject: isAuthenticated,
    },
})
