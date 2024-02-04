import { connect, disconnect } from 'mongoose'; // Corrected the import for disconnect

export default async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URI as string); // Updated to use the correct environment variable
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error(error);
        throw new Error("Cannot connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log('Successfully disconnected from MongoDB');
    } catch (error) {
        console.error(error);
        throw new Error("Cannot disconnect from MongoDB"); // Corrected the error message
    }
}

export { connectToDatabase, disconnectFromDatabase };
