import { MongoClient, Db } from "mongodb";

const uri = `mongodb+srv://xyzuan:${process.env.MONGO_DB_PASS}@myxyzuan.rgvs8mt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function connectDB(): Promise<Db> {
  try {
    await client.connect();
    return client.db("xyzuan_data");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export { connectDB };
