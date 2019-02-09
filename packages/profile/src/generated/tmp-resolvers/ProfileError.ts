// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { ProfileErrorResolvers } from '../graphqlgen'

export const ProfileError: ProfileErrorResolvers.Type = {
    ...ProfileErrorResolvers.defaultResolvers,

    avatar_url: (parent, args, ctx) => {
        throw new Error('Resolver not implemented')
    },
}
