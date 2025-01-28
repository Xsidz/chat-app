import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the Database");
  } catch (error) {
    console.log("Mongo Disconnected :", error);
  }
};
