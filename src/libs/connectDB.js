import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_API_KEY);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB");
    throw new Error();
  }
};

export default connectDB;
