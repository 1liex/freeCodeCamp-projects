import express from 'express'
import accountsRouter from './accounts.router.js'
import transferRouter from './transfer.router.js'
import healthCheckRouter from './healthCheck.router.js'

const mainRouter = express.Router()





mainRouter.use("/accounts", accountsRouter)
mainRouter.use("/transfer", transferRouter)
mainRouter.use("/health", healthCheckRouter)


export default mainRouter