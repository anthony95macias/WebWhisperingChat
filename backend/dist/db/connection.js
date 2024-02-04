"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose"); // Corrected the import for disconnect
async function connectToDatabase() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGODB_URI); // Updated to use the correct environment variable
        console.log('Successfully connected to MongoDB');
    }
    catch (error) {
        console.error(error);
        throw new Error("Cannot connect to MongoDB");
    }
}
exports.default = connectToDatabase;
exports.connectToDatabase = connectToDatabase;
async function disconnectFromDatabase() {
    try {
        await (0, mongoose_1.disconnect)();
        console.log('Successfully disconnected from MongoDB');
    }
    catch (error) {
        console.error(error);
        throw new Error("Cannot disconnect from MongoDB"); // Corrected the error message
    }
}
exports.disconnectFromDatabase = disconnectFromDatabase;
//# sourceMappingURL=connection.js.map