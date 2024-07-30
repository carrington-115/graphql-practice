require("dotenv").config();
const express = require("express");
const connectToDB = require("./db/client-connect");
const app = express();
connectToDB();

app.use([express.json()]);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
