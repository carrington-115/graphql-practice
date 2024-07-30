require("dotenv").config();
const express = require("express");
// const connectToDB = require("./db/client-connect");
const app = express();
const { data } = require("./db/sample-data");

app.use([express.json()]);

app.get("/", (req, res) => {
  res.json({ data: data });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
