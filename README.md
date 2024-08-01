# graphql-practice

1. Installation and Initialization

- Graphql is a query language for the server that is more efficient that the RESTAPI framework since we can avoid over fetching and under fetching since graphql gives us the opportunity to specify what is needed in our response.

- To install graphql, we use the code snippet

```bash
npm install graphql
```

1. **Introduction**

- The Apollo server object takes an object of 2 main properts: **_The typeDefs and the resolver functions_**
- The typeDefs are the properties that defines Type aspects of the data like the main object of the data like **Students**. Generally typeDefs define the schema which are like the root data of the graph.
- GraphQL Schema can hold 5 specific data types: **_int, float, boolean, string, ID_**. Moreover, it is possible to make ones types like in ts.
- All graphql schemas may require the **Query** schema since it defines the entry point and defines the output of the graphql cmds.
- resolver functions are there so we can handle how we want to deal with requests made to the apollo server. We have to make the resolver functions for each of the created schema in the typeDefs

2. **Using Query parameters**

- With graphql it also possible to get single and specific data from a group of data. To do this, there must be an entry point for the data in the **_Query_** schema.

```js
const data = `#graphql
    type Query {
        students: [Student],
        student(id: ID!): Student
    }
`;
```

- Then, we add the resolver function for this new entrye to the resolver function. Initially, a resolver function can accept 3 arguments: _parent: used for related data_, _args: used to access a query variable in a query_, _context: used for supply context values for resolvers_.

```js
const resolvers = {
  Query: {
    student(_, args) {
      return data.students.find((student) => student.student_id === args.id);
    },
  },
};
```

3. **Structur of a GraphQL Query**

- A graphql query has the structure below:

```bash
query QueryName($param: Type, ...){
    entryData (param: $param_needed){
        data_args_name
    }
}
```
