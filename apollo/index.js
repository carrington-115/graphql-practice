require("dotenv").config({ path: "../.env" });
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const server = new ApolloServer();

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.APOLLO_SERVER_PORT },
});

console.log(
  `Apollo server is running on port: ${process.env.APOLLO_SERVER_PORT}`
);
