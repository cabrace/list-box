import { MongoClient } from 'mongodb';
import { MONGO_DB } from '$env/static/private'; //Regular .env var import
import { MONGODB_DEV } from '$env/static/private'; //Regular .env var import

console.log("VITE_MONGO_DB", import.meta.env.VITE_MONGO_DB) //import using VITE_ prefix

const client = new MongoClient(MONGODB_DEV)

await client.connect()

export default client.db("List")



