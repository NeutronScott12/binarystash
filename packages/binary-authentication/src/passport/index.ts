import { ApolloError } from 'apollo-server'
import * as passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as GitHubStrategy } from 'passport-github'
import { Strategy as TwitterStrategy } from 'passport-twitter'
import { logger } from 'scotts_utilities'
import { db } from '../index'

interface CreateUserArgs {
    email: string
    username: string
    avatar: string
    confirmed: boolean
    githubId?: string
    twitterId?: string
    facebookId?: string
}

const {
    PRODUCTION_SERVER_ENDPOINT,
    DEVELOPMENT_SERVER_ENDPOINT = 'http://localhost:5000',
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET,
    FACEBOOK_SECRET,
    FACEBOOK_CLIENT_ID,
} = process.env

const createUser = async ({
    email,
    username,
    avatar,
    confirmed,
    githubId,
    twitterId,
    facebookId,
}: CreateUserArgs) => {
    // try {
    return await db.createUser({
        email: email,
        username: username,
        password: '',
        confirmed,
        role: 'USER',
        gitHubId: githubId,
        twitterId,
        facebookId,
        avatar_url: {
            create: {
                filename: 'github_avatar',
                mimetype: 'image/jpeg',
                encoding: 'something',
                key: '1',
                ETag: 'tag',
                url: avatar,
            },
        },
    })
    // } catch (error) {
    // 	return console.error(error)
    // }
}

export const setupPassport = () => {
    console.log('PRODUCTION_SERVER_ENDPOINT', PRODUCTION_SERVER_ENDPOINT)
    console.log('DEVELOPMENT_SERVER_ENDPOINT', DEVELOPMENT_SERVER_ENDPOINT)
    passport.use(
        new GitHubStrategy(
            {
                clientID: GITHUB_CLIENT_ID as string,
                clientSecret: GITHUB_CLIENT_SECRET as string,
                callbackURL:
                    process.env.NODE_ENV === 'production'
                        ? `${PRODUCTION_SERVER_ENDPOINT}/api/v1/oauth/github`
                        : `${DEVELOPMENT_SERVER_ENDPOINT}/api/v1/oauth/github`,
                scope: ['user:email'],
            },
            async (accessToken, refreshToken, profile: any, cb) => {
                try {
                    let user
                    const resp = await db.users({
                        where: { email: profile.emails[0].value },
                    })

                    console.log('RESPONSE', resp)

                    if (
                        resp !== undefined &&
                        resp[0] !== undefined &&
                        resp[0].id !== undefined
                    ) {
                        user = await db.user({
                            id: resp[0].id,
                        })
                    }

                    console.log('USER_ONE', user)

                    if (!user) {
                        console.log('WORKING')
                        user = await createUser({
                            email: profile.emails[0].value,
                            username: profile.username,
                            avatar: profile._json.avatar_url,
                            confirmed: true,
                            githubId: profile.id,
                        })
                    }

                    if (
                        user !== undefined &&
                        user.gitHubId === undefined &&
                        profile.id
                    ) {
                        user = await db.updateUser({
                            where: {
                                id: user.id,
                            },
                            data: {
                                gitHubId: profile.id,
                            },
                        })
                    }

                    console.log('USER_TWO', user)

                    return cb(null, { user, accessToken, refreshToken })
                } catch (error) {
                    console.log('MASSIVE ERROR', error)
                    logger('Github Error').error({ level: '5', message: error })
                    return new ApolloError(error)
                }
            },
        ),
    )

    passport.use(
        new TwitterStrategy(
            {
                consumerKey: TWITTER_CONSUMER_KEY as string,
                consumerSecret: TWITTER_CONSUMER_SECRET as string,
                callbackURL:
                    process.env.NODE_ENV === 'production'
                        ? `${PRODUCTION_SERVER_ENDPOINT}/api/v1/auth/twitter/callback`
                        : `${DEVELOPMENT_SERVER_ENDPOINT}/api/v1/auth/twitter/callback`,
                includeEmail: true,
            },
            async (accessToken, refreshToken, profile: any, cb) => {
                try {
                    let user
                    let email

                    if (
                        profile.emails !== undefined &&
                        profile.emails[0].value !== undefined
                    ) {
                        email = profile.emails[0].value
                    }

                    if (profile.id !== null) {
                        user = await db.users({
                            where: { twitterId: profile.id },
                        })
                    }

                    if (
                        user !== undefined &&
                        user.length == 0 &&
                        profile.id !== null
                    ) {
                        user = await createUser({
                            email:
                                email !== undefined || email !== null
                                    ? email
                                    : '',
                            username: profile.username,
                            avatar: profile.photos[0].value,
                            confirmed: true,
                            twitterId: profile.id,
                        })
                    } else if (
                        user !== undefined &&
                        user[0].twitterId == null &&
                        profile.id !== null
                    ) {
                        user = await db.updateUser({
                            where: {
                                id: user[0].id,
                            },
                            data: {
                                twitterId: profile.id,
                            },
                        })
                    }

                    if (Array.isArray(user)) {
                        return cb(null, {
                            user: user[0],
                            accessToken,
                            refreshToken,
                        })
                    }

                    return cb(null, { user, accessToken, refreshToken })
                } catch (error) {
                    logger('Twitter Error').error({
                        level: '5',
                        message: error,
                    })
                    return new ApolloError(error)
                }
            },
        ),
    )

    passport.use(
        new FacebookStrategy(
            {
                clientID: FACEBOOK_CLIENT_ID as string,
                clientSecret: FACEBOOK_SECRET as string,
                callbackURL:
                    process.env.NODE_ENV === 'production'
                        ? `${PRODUCTION_SERVER_ENDPOINT}/api/v1/auth/facebook/callback`
                        : `${DEVELOPMENT_SERVER_ENDPOINT}/api/v1/auth/facebook/callback`,
                profileFields: ['id', 'email', 'name', 'picture'],
            },
            async (accessToken, refreshToken, profile: any, cb) => {
                try {
                    let user
                    let email

                    if (
                        profile.emails !== undefined &&
                        profile.emails[0].value !== undefined
                    ) {
                        email = profile.emails[0].value
                    }

                    if (profile.id !== null) {
                        user = await db.users({
                            where: { facebookId: profile.id },
                        })
                    }

                    if (
                        user !== undefined &&
                        user.length == 0 &&
                        profile.id !== null
                    ) {
                        user = await createUser({
                            email:
                                email !== undefined || email !== null
                                    ? email
                                    : '',
                            username: profile.name.givenName,
                            avatar: profile.photos[0].value,
                            confirmed: true,
                            facebookId: profile.id,
                        })
                    } else if (
                        user !== undefined &&
                        user[0].facebookId == null &&
                        profile.id !== null
                    ) {
                        user = await db.updateUser({
                            where: {
                                id: user[0].id,
                            },
                            data: {
                                facebookId: profile.id,
                            },
                        })
                    }

                    console.log('FACEBOOK_USER', user)

                    if (Array.isArray(user)) {
                        return cb(null, {
                            user: user[0],
                            accessToken,
                            refreshToken,
                        })
                    }

                    return cb(null, { user, accessToken, refreshToken })
                } catch (error) {
                    logger('Facebook Error').error({
                        level: '5',
                        message: error,
                    })
                    return new ApolloError(error)
                }
            },
        ),
    )

    return passport
}
