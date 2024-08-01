// this file holds all the types of schema
module.exports.typeDefs = `#graphql
    type Course {
        course_id: ID!,
        course_name: String!,
        instructor: String!,
    }
    type Student {
        student_id: ID!,
        name: String!,
        age: Int,
        courses: [Course]
    }
    type Query {
        students: [Student],
        courses: [Course]
    }
`;
