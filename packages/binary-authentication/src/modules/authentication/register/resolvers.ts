import { INVALID_CREDENTIALS } from '@binarystash/common'
import { AuthenticationError, ForbiddenError } from 'apollo-server'
import { decodeToken, hashPassword, logger } from 'scotts_utilities'
import * as yup from 'yup'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'
import { sendConfirmationEmail } from '../../../utils/auth/emailHelpers'

const schema: yup.ObjectSchema<{}> = yup.object().shape({
    username: yup.string().required(),
    email: yup
        .string()
        .required()
        .email(),
    password: yup.string().required(),
})

export const resolvers = {
    Mutation: {
        async authConfirmation(
            _: any,
            { token }: MutationResolvers.ArgsAuthConfirmation,
            { db }: Context,
        ) {
            try {
                let decoded: any
                if (token != null) {
                    decoded = decodeToken(token)
                }

                if (decoded == null) {
                    throw new ForbiddenError(INVALID_CREDENTIALS)
                }

                const user = await db.updateUser({
                    where: { id: decoded.id },
                    data: {
                        confirmed: true,
                    },
                })

                if (user) {
                    return {
                        ok: true,
                        result: `${user.username}`,
                    }
                } else {
                    return {
                        ok: true,
                        result: INVALID_CREDENTIALS,
                    }
                }
            } catch (error) {
                logger('Auth Confirmation').error({
                    level: '0',
                    message: error.message,
                })
                return error
            }
        },
        async register(
            _: any,
            { username, email, password }: MutationResolvers.ArgsRegister,
            { db, req }: Context,
        ): Promise<any> {
            try {
                const formattedEmail = email.toLowerCase()
                const isValid: yup.ValidateOptions = await schema.validate(
                    {
                        username,
                        email: formattedEmail,
                        password,
                    },
                    { abortEarly: false },
                )

                if (isValid) {
                    const passwordHash: string = await hashPassword(
                        password as string,
                        10,
                    )

                    const user = await db.createUser({
                        username,
                        email,
                        role: 'USER',
                        password: passwordHash,
                        avatar_url: {
                            create: {
                                filename: 'pillars',
                                mimetype: 'image/jpeg',
                                encoding: 'something',
                                key: '1',
                                ETag: 'tag',
                                url:
                                    'http://res.cloudinary.com/dmxf3jh8t/image/upload/v1524175832/pillarsofcreation_m6prxe.jpg',
                            },
                        },
                    })

                    const url: string = req.get('origin') as string

                    sendConfirmationEmail(
                        {
                            id: user.id,
                            email: user.email as string,
                            username: user.username,
                        },
                        url,
                    )

                    return {
                        __typename: 'RegisterResponse',
                        ok: true,
                        result: `Confirmation email sent to ${user.email}`,
                    }
                } else {
                    return {
                        __typename: 'RegisterResponse',
                        ok: false,
                        result: new AuthenticationError(INVALID_CREDENTIALS)
                            .message,
                    }
                }
            } catch (error) {
                logger('Register').error({ level: '0', message: error })
                return error
            }
        },
    },
}
