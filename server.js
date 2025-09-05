const PORT = process.env.PORT || 3000;

// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// Express
const express = require('express');
const app = express();

// Database
const { prisma, testConnection } = require('./src/config/db');
testConnection();

// Errors
const notFound = require('./src/middleware/notFound');
const errorHandler = require('./src/middleware/errorHandler');



// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using Errors
app.use(notFound);
app.use(errorHandler);






app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});