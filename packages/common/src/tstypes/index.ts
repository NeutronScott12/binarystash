import { S3 } from 'aws-sdk'
import { Redis } from 'ioredis'

export interface Session extends Express.Session {
    userId?: string
    decodedUser?: string
}

export interface Context {
    redis: Redis
    session: Session
    req: Request
    res: Response
    // db: Prisma
    s3: S3
    // stripe: Stripe
}
