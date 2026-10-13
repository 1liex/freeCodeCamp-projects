import { getAccounts, saveAccounts } from "../db/db.js";
import throwErrors from "../utils/throwErrors.utils.js";

/**
 * Executes a monetary transfer between two bank accounts.
 * @description Validates account existence, ensures the sender has adequate balance, applies adjustments, and updates the data store.
 * @param {number} fromId - Unique identifier of the sender's account.
 * @param {number} toId - Unique identifier of the recipient's account.
 * @param {number} amount - Total monetary value to transfer.
 * @returns {Promise<object>} Transaction details including owners' names, transferred amount, and updated balances.
 * @throws {Error} Throws a 404 error if an account is missing, or a 409 error if funds are inadequate.
 */
const transferService = async (fromId, toId, amount) => {
    const accounts = await getAccounts();

    const sender = accounts.find((a) => a.id === fromId)
    if (!sender) {
        throwErrors(404, 'Sender account not found')
    }

    const recipient = accounts.find((a) => a.id === toId)
    if (!recipient) {
        throwErrors(404, 'Recipient account not found')
    }

    if (sender.baalnce < amount) {
        throwErrors(409, 'Insufficient funds')
    }

    sender.balance -= amount;
    recipient.balance += amount;

    await saveAccounts(accounts)
    return {
        message: "Transfer successful",
        senderName: sender.owner,
        recipientName: recipient.owner,
        amountTransferred: amount,
        senderNewBalance: sender.balance,
        recipientNewBalance: recipient.balance,
    }
}

export default transferService