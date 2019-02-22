import { S3 } from 'aws-sdk'
import { Request, Response } from 'express'
import { Redis } from 'ioredis'
// import * as Stripe from 'stripe'
import { Prisma } from '../generated/prisma-client'

export interface IExpressTypes {
    request: Request
    response: Response
}

export interface ProcessEnv {
    [key: string]: string | undefined
}

export interface User {
    id: string
    username: string
}

export interface Session extends Express.Session {
    userId?: string
    decodedUser?: string
}

export interface Context {
    redis: Redis
    session: Session
    req: Request
    res: Response
    db: Prisma
    s3: S3
    // stripe: Stripe
}

export type Resolver = (
    parent: Object,
    args: Object,
    context: Context,
    info: any,
) => any

export type GraphqlMiddleFunc = (
    resolver: Resolver,
    parent: Object,
    args: Object,
    context: Context,
    info: any,
) => any

export interface ResolverMap {
    [key: string]: {
        [key: string]: Resolver
    }
}

export interface MyUser {
    id: string
    email: string
    set_private: boolean
    username: string
    gitHubId: string | null
    facebookId: string | null
    twitterId: string | null
    gmailId: string | null
    private: boolean
    confirmed: boolean
    online: boolean
    createdAt: string
    updatedAt: string
}
export interface LoginResponse {
    ok: boolean
    token: string | null
    refreshToken: string
}
export interface RegisterResponse {
    ok: boolean
    result: string
}
export interface ForgotPasswordResponse {
    ok: boolean
    result: string
}
export interface Error {
    path: string
    message: string
}
export interface VoidResponse {
    ok: boolean | null
}
