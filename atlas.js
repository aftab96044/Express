import { MongoClient } from "mongodb";

const url = "mongodb+srv://Shaikh_aftab:Messi%2310@cluster0.bxz4xit.mongodb.net/?appName=Cluster0";
const database = "college";
const collection = "student";

const client = new MongoClient(url);

async function dbConnection() {
    await client.connect();
    console.log("............connected............");

    const db = client.db(database);
    const collectionResult = db.collection(collection);

    const result = await collectionResult.find().toArray();
    console.log(result);
}

dbConnection();