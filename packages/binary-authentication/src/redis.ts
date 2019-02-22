import * as Redis from 'ioredis'

const REDIS_URL =
    process.env.NODE_ENV === 'production' ? `${process.env.REDIS_URL}` : ''

export const redis = new Redis(REDIS_URL)
