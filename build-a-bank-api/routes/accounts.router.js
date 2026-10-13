import express from 'express'
import { accountsValidator } from '../middelware/validators/Validators.js';
import getSpecificAccountController from '../controllers/accountControllers/getSpecificAccount.controller.js';
import getAllUsersController from '../controllers/accountControllers/getAllUsers.controller.js';

const accountsRouter = express.Router()


accountsRouter.get('/', getAllUsersController)

accountsRouter.get("/:id", accountsValidator, getSpecificAccountController);

export default accountsRouter