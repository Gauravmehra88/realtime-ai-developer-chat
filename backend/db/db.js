import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  try {
    console.log("Loaded URI:", process.env.MONGO_URI); // Debug line
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔥 MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
  }
}

export default connectDB;
