import { ForbiddenError } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { INVALID_CREDENTIALS } from '../constants';



export default class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: any) {
        const { resolve = defaultFieldResolver } = field

        field.resolve = function(...args: any) {
            const [, , context] = args
            if (context.req.session.userId === null) {
                console.log('WORKING', context.req.session)
                throw new ForbiddenError(INVALID_CREDENTIALS)
            }

            return resolve.apply(this, args)
        }
    }
}
