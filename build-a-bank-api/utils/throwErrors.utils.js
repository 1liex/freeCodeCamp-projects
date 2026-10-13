/**
 * Global Error Thrower Utility
 * @description Framework-friendly utility to standardize and throw operational errors. 
 * Supports both string messages and arrays of structured/detailed errors.
 * 
 * @param {number|string} errStatus - Error HTTP status code (e.g., 400, 404). Must be a valid numeric value.
 * @param {string|string[]|object[]} errMessage - Error message as a string, or an array containing multiple errors.
 * @throws {Error} Throws an Error.
 */
const throwErrors = (errStatus = null, errMessage = "Something went wrong") => {
    const errStatusNumber = errStatus ? parseInt(errStatus, 10) : null

    if (errStatus && isNaN(errStatusNumber)) {
        throw new Error("[Developer Error]: errStatus must be a valid number");
    }

    let err;

    if (Array.isArray(errMessage)) {
        err = new Error("Something went wrong");
        err.succass = false
        err.details = errMessage;
    } else {
        err = new Error(String(errMessage));
    }

    errStatus ? err.status = errStatusNumber : null

    throw err;
};

export default throwErrors;
