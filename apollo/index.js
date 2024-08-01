require("dotenv").config({ path: "../.env" });
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema");
const { data } = require("../db/sample-data");

// the resolver args* instance
const resolvers = {
  Query: {
    students() {
      return data.students;
    },
    courses() {
      return data.courses;
    },
    student(_, args) {
      return data.students.find((student) => student.student_id === args?.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server, {
  listen: { port: process.env.APOLLO_SERVER_PORT },
});

console.log(
  `Apollo server is running on port: ${process.env.APOLLO_SERVER_PORT}`
);
