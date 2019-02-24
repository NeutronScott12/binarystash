import * as compression from 'compression';
import * as express from 'express';
import { Express } from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import { Redis } from 'ioredis';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as path from 'path';
import { REDIS_PREFIX } from '../constants';
import { addUser } from '../utils/auth/middleware';

const redisStore = require('connect-redis')(session)

export const expressMiddleware = (
    app: Express,
    passport: passport.PassportStatic,
    redis: Redis,
) => {
    if (process.env.NODE_ENV !== 'production') {
    }

    app.disable('x-powered-by')
    app.use(morgan('dev'))
    app.use(helmet())
    app.use(compression())
    app.use(express.json())
    app.use(
        express.urlencoded({
            extended: true,
            inflate: true,
            limit: '100kb',
            parameterLimit: 1000,
        }),
    )
    app.use(express.static(path.join(__dirname, '../public')))

    app.use(
        session({
            store: new redisStore({
                client: redis as any,
                prefix: REDIS_PREFIX,
            }),
            name: 'qid',
            secret: process.env.SESSION_SECRET as string || "secret",
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: 'auto', // process.env.NODE_ENV === 'production', remember for https
                maxAge: 1000 * 60 * 60 * 24 * 7,
            },
        }),
    )
    app.use(passport.initialize())
    app.use(addUser as any)
}
