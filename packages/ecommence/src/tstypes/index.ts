import { S3 } from 'aws-sdk'
import { Request, Response } from 'express'
import { Redis } from 'ioredis'
import { Prisma } from '../generated/prisma-client'

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
