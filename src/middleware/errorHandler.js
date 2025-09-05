const ApiError = require('../errors/apiError');

const errorHandler = (err, req, res, next) => {
    console.error(err); // Optional: use logging library like Winston or Pino

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    // Fallback for unexpected errors
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong on the server',
    });
};

module.exports = errorHandler;