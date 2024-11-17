import mongoose from "mongoose";

/**
 * Connects to the MongoDB database only when connection is not established.
 *
 * @return {Promise<void>} - A promise that resolves once the connection is established.
 * @throws {Error} - If the connection to the database fails.
 */
const connectDB = async () => {
  try {
    if (mongoose.connection && mongoose.connection.readyState !== 0) {
      console.log("Already connected to MongoDB");
      return;
    }

    console.log(
      "🚀 ~ connectDB ~ process.env.NEXT_PUBLIC_DB_API_KEY:",
      process.env.NEXT_PUBLIC_DB_API_KEY
    );

    await mongoose.connect(process.env.NEXT_PUBLIC_DB_API_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw new Error(err.message);
  }
};

export default connectDB;
