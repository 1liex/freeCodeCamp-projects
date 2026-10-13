import express from 'express'
import { transferValidator } from '../middelware/validators/Validators.js';
import transferController from '../controllers/transfer.controller.js';
const transferRouter = express.Router()


transferRouter.post('/', transferValidator, transferController)

export default transferRouter