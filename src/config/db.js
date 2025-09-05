// db.js
const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('../middleware/asyncHandler');

const prisma = new PrismaClient();

// Wrap the connection test with asyncHandler
const testConnection = asyncHandler(async () => {
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Database connection successful');
});

// Export prisma and the test function
module.exports = {
    prisma,
    testConnection,
};

// Optional: run test if file is executed directly
if (require.main === module) {
    testConnection();
}
