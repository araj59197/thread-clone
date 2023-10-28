import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    // Set strict query mode for Mongoose to prevent unknown field queries.
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) return console.log("MongoDB_URL not found");

    // If the connection is already established, return without creating a new connection.
    if (isConnected) return console.log("Already connected to MongoDB");

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        console.log('connected to MongoDB');
    } catch (error) {
        console.log(error);

    }


}