import mongoose from "mongoose";

/**
 * Connects to the MongoDB database only when connection is not established.
 *
 * @return {Promise<void>} - A promise that resolves once the connection is established.
 * @throws {Error} - If the connection to the database fails.
 */
const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_API_KEY);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB");
    throw new Error(err.message);
  }
};

export default connectDB;
