import { ApolloServer } from 'apollo-server-express'
import { S3 } from 'aws-sdk'
import 'dotenv/config'
import * as express from 'express'
import { importSchema } from 'graphql-import'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import * as http from 'http'
import { arch, platform } from 'os'
import * as path from 'path'
import {
    consolePrint,
    genResolvers,
    logger,
    normalisePort,
} from 'scotts_utilities'
//Replace it someday
import { PORT } from './constants'
// import CustomDirectives from './directives'
import { Prisma } from './generated/prisma-client'
import { permissions } from './graphqlMiddleware'
// import { ShieldMiddleware } from './middleware/graphql/shield'
// import { setupPassport } from './passport'
import { redis } from './redis'
// import { logger } from './utils/logger'

// import { graphqlMiddleware } from './middleware/graphql/graphql-middleware';
// import { Prisma } from './generated/prisma-client';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const s3Client: S3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    params: {
        Bucket: process.env.AWS_BUCKET,
    },
})

export const db: Prisma = new Prisma({
    endpoint:
        process.env.NODE_ENV !== 'production'
            ? 'http://localhost:4466/prismadb/dev'
            : `${process.env.HEROKU_PRISMA_ENDPOINT}`,
    secret: process.env.MANAGEMENT_API_SECRET || 'my-server-secret-123',
    debug: false,
})

const typeDefs: string = importSchema(path.join(__dirname, './schema.graphql'))

const makeSchema = makeExecutableSchema({
    typeDefs,
    resolvers: genResolvers(path.join(__dirname, '/**/resolvers.?s')),
    // schemaDirectives: CustomDirectives,
})

const app = express()

// let passport = setupPassport()

// middleware(app)

// app.use('/api/v1', ApiRouter)

const { schema } = applyMiddleware(makeSchema, permissions)

const server: ApolloServer = new ApolloServer({
    schema,
    playground: {
        endpoint: '/',
        subscriptionEndpoint: '/',
        settings: {
            'request.credentials': 'include',
        },
    },
    introspection: true,

    context: ({ req, res }: any) => {
        return {
            req: req,
            res: res,
            session: req !== undefined ? req.session : req,
            redis,
            db,
            s3: s3Client,
        }
    },
} as any)

server.applyMiddleware({
    app,
    path: '/',

    cors: {
        credentials: true,
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:1234',
            'http://localhost:4000',
            'http://localhost:5000',
            'http://mainsite.surge.sh',
            'https://inspiring-euler-247a1c.netlify.com',
        ],
    },
})

const httpServer = http.createServer(app)

httpServer.listen(normalisePort(PORT))
server.installSubscriptionHandlers(httpServer)

httpServer.on('listening', async () => {
    const enviroment = process.env.NODE_ENV

    if (enviroment === 'test') {
        redis.flushall()
    }

    // if (!host)

    const messages: string[] = [
        `Running on: http://localhost:${PORT}`,
        `Subscriptions on: http://localhost:${PORT}`,
        `Current development status: ${enviroment}`,
        `Operating system: ${platform()} ${arch()}`,
    ]

    await consolePrint(messages)
})

httpServer.on('error', err =>
    logger('Server').error({ level: '0', message: err }),
)

export default server
