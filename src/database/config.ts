import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {DB_MONGO, DB_MONGO_TEST, NODE_ENV} = process.env;

const connectionString = NODE_ENV === 'test' ? DB_MONGO_TEST : DB_MONGO;

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString!);
    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error(`Error connecting to DB`);
  }
};
