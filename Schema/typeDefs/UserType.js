const { gql } = require('apollo-server'); 

const typeDefs = gql` 
    type User { 
        email: String!, 
        phone: String, 
        firstName: String!, 
        lastName: String!, 
        hashedPassword: String!,
        loginStatus: Boolean, 
    }, 
    type Mutation { 
        addUser(email: String!, phone: String!, firstName: String!, lastName: String!, hashedPassword: String!): User!,
        login(email: String!, password: String!): Boolean!,
    }, 

    type Query { 
        getAllUsers: [User!]!, 
        # user(email: String!, phone: String!, firstName: String!, lastName: String!): User!, 
    }
`

module.exports = {typeDefs};