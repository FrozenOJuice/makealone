class ApiError extends Error {
    constructor(statusCode, message, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational; // For distinguishing dev vs system errors
        Error.captureStackTrace(this, this.constructor);
    }
}
  
  module.exports = ApiError;