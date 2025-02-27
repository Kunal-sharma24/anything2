import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\nConnected to ${ConnectionInstance.connection.name} Database\n`);
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

export default connectDB;