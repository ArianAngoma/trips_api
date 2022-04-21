import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DB_MONGO!;

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString!);
    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error(`Error connecting to DB`);
  }
};
