const ApiError = require('./apiError');

class ValidationError extends ApiError {
    constructor(message) {
        super(400, message);
    }
}

module.exports = ValidationError;