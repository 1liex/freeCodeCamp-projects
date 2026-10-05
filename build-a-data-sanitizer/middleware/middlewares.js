/**
 * Sanitizes incoming request bodies by stripping HTML tags and lowercase-converting text strings.
 * 
 * @param {Express.Request} req - Express request object containing the user input.
 * @param {Express.Response} res - Express response object.
 * @param {Express.NextFunction} next - Express next middleware function.
 */

const inputCleaner = (req, res, next) => {
    const { username, comment } = req.body
    const regex = /(<([^>]+)>)/ig
    req.body.username = username?.replace(regex, "").toLowerCase()
    req.body.comment = comment?.replace(regex, "")
    next()
}

/**
 * Validates the username to ensure its length is at least 3 characters.
 * 
 * If validation fails, it redirects to `/form?error=` with a specific error message.
 * @param {Express.Request} req - Express request object containing the user input.
 * @param {Express.Response} res - Express response object.
 * @param {Express.NextFunction} next - Express next middleware function.
 */
const inputValidator = (req, res, next) => {
    const { username } = req.body
    console.log(username)
    if (username.length < 3) {
        return res.redirect("/form?error=Username must be at least 3 characters.")
    }
    next()
}

module.exports = {
    inputValidator,
    inputCleaner
}