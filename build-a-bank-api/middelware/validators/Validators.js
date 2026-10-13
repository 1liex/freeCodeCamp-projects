import { transferSchema } from "./validatorsSchema.js"
import throwErrors from "../../utils/throwErrors.utils.js"

/**
 * Validates the account ID parameter.
 * @description Middleware to ensure the `id` route parameter is a valid number, parsing it to an integer.
 * @param {Request} req  Express request object.
 * @param {Response} res  Express response object.
 * @param {NextFunction} next  Callback function to pass control to the next middleware.
 */
const accountsValidator = (req, res, next) => {
    const { id } = req.params
    const idNumber = parseInt(id)
    if (!idNumber) {
        throwErrors(400, "ID must be a number")
    }
    req.params.id = idNumber
    next()
}


/**
 * Validates the transfer request body.
 * @description Middleware that verifies incoming transaction data against a strict schema before processing.
 * @param {Request} req - Express request object containing the transaction payload.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Callback function to transition control to the next middleware.
 * @throws {Error} Triggers the error utility with a 400 status code and an array of validation issues if parsing fails.
 */
const transferValidator = (req, res, next) => {
    const result = transferSchema.safeParse(req.body)
    
    if (!result.success) {
        const errors = result.error.issues.map((e) => {
            return e.message
        })
        throwErrors(400, errors)
    }
    
    req.body = result.data
    next()
}


export {
    accountsValidator,
    transferValidator
}