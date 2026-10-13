import { getAccounts } from "../db/db.js";
import throwErrors from "../utils/throwErrors.utils.js";

const getAccountsService = async (accountId) =>{
    const accounts = await getAccounts();
    const account = accounts.find((a) => a.id === accountId);
    if (!account) {
        throwErrors(404, "Account not found")
    }
    return account
}

export default getAccountsService 