import { getAccounts } from "../../db/db.js";

/**
 * @description Controller used to get all users in the db
 * @param {Express.Request} req Express request object
 * @param {Express.Response} res Epxress response object
 */
const getAllUsersController = async (req, res) => {
    const accounts = await getAccounts();
    res.status(200).json(accounts)
}

export default getAllUsersController