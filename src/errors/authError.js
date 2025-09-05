const ApiError = require('./apiError');

class AuthError extends ApiError {
    constructor(message = 'Unauthorized') {
        super(401, message);
    }
}

module.exports = AuthError;