import { PrismaClient } from '@prisma/client';
// import mongoose from 'mongoose';

// mongoose.connect(String(process.env.DATABASE_URL), {})
// const mongo = mongoose.connection;

const dataBase = new PrismaClient();

export { dataBase };
