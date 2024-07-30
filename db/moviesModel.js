require("dotenv").config({ path: "../.env" });
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URL);
const session = client.startSession();
const db = client.db("sample_mflix");

const getAllAmericanDrama = async () => {
  session.startTransaction();
  try {
    const moviesCollection = db.collection("movies");
    const movies = await moviesCollection.findOne();
    console.log(movies);
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    console.error(error);
  } finally {
    await session.endSession();
  }
};

module.expors = { getAllAmericanDrama };
