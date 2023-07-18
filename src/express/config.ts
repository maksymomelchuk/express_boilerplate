import express, { Application } from 'express'

export const ExpressConfig = (): Application => {
    const app = express()
    return app
}
