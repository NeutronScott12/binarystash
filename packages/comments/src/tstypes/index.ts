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
    decodedUser?: User
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
export interface VoidResponse {
    ok: boolean | null
}
export interface Error {
    path: string
    message: string
}
export interface AddFriendResponse {
    ok: boolean
}

export interface FriendRemoveResponse {
    ok: boolean
}

export interface ProductsInput {
    id: string[]
}

export interface ModeratorsArgs {
    users: string[]
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
export interface ProfileResponse {}
export interface ProfileError {
    username: string | null
    message: string | null
    error: string | null
}
export interface DeleteCommentResponse {
    id: string | null
    parentId: string | null
}

export interface UpdateProfileResponse {
    username: string | null
}

export interface CommentSectionOptions {
    open: boolean
}
