import getAccountsService from "../../services/accounts.service.js";

/**
 * @description Controller used to get specific user by id 
 * @param {Express.Request} req Express request object
 * @param {Express.Response} res Express response object
 */
const getSpecificAccountController = async (req, res) => {
    const { id } = req.params
    const account = await getAccountsService(id)
    res.status(200).json(account);
}

export default getSpecificAccountController
