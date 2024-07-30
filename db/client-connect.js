require("dotenv").config({ path: "../.env" });
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URL);

function connectToDB() {
  client
    .connect()
    .then(() => {
      console.log("The database client is connected");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = connectToDB;
