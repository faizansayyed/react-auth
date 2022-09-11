import pkg from 'mongodb';
const { MongoClient } = pkg;

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(process.env.NODE_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}