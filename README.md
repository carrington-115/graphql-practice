# graphql-practice

1. Installation and Initialization

- Graphql is a query language for the server that is more efficient that the RESTAPI framework since we can avoid over fetching and under fetching since graphql gives us the opportunity to specify what is needed in our response.

- To install graphql, we use the code snippet

```bash
npm install graphql
```

- The Apollo server object takes an object of 2 main properts: **_The typeDefs and the resolver functions_**
- The typeDefs are the properties that defines Type aspects of the data like the main object of the data like **Students**. Generally typeDefs define the schema which are like the root data of the graph.
- GraphQL Schema can hold 5 specific data types: **_int, float, boolean, string, ID_**
