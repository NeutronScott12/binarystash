// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { VoidResponseResolvers } from '../graphqlgen'

export const VoidResponse: VoidResponseResolvers.Type = {
    ...VoidResponseResolvers.defaultResolvers,

    errors: (parent, args, ctx) => {
        throw new Error('Resolver not implemented')
    },
}
