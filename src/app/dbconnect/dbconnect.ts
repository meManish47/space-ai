import { MongoClient, Db } from "mongodb";

const MONGO_URI: string = process.env.MONGO_URI || "";

let client;
let db: Db | undefined;

export async function connectDB() {
  if (db) return db;

  client = new MongoClient(MONGO_URI);

  await client.connect();

  db = client.db("space-ai-emp");

  console.log("MongoDB Atlas connected");

  return db;
}

export function getDB(): Db | undefined {
  return db;
}
