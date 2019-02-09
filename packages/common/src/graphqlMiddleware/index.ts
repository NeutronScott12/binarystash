import { rule } from 'graphql-shield'
import { ALREADY_SIGNED_IN } from '../constants'
import { Context } from '../tstypes'

export const isAuthenticated = rule()((_: any, __: any, ctx: Context) => {
    return !!ctx.session.userId
})

export const alreadySignedIn = rule()(
    async (_: any, __: any, context: Context) => {
        console.log('SESSIONS', context.session.userId)

        if (context.session.userId !== undefined) {
            console.log('ERROR')
            return new Error(ALREADY_SIGNED_IN)
        }
        console.log('HERE')
        return true
    },
)
