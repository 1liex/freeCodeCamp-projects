import transferService from "../services/transfer.service.js"

/**
 * Handles account money transfer requests.
 * @description Controller that processes financial transactions between accounts using the business service layer.
 * @param {Request} req - Express request object containing transfer specifics in the payload body.
 * @param {Response} res - Express response object used to deliver the execution results.
 * @returns {Promise<void>} Sends a JSON payload response containing the completed transfer transaction data.
 */
const transferController = async (req, res,) => {
    const { fromId, toId, amount } = req.body
    const transferResult = await transferService(fromId, toId, amount)
    res.status(200).json(transferResult)

}

export default transferController