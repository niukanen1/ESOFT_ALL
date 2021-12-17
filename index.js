const { ApolloServer } = require('apollo-server');

const {typeDefs} = require('./Schema/typeDefs/UserType'); 
const {resolvers} = require('./Schema/Resolvers/UserResolvers');
const Schema = {typeDefs, resolvers};

const server = new ApolloServer(Schema); 

server.listen({port: process.env.PORT || 4000}).then(() => { 
    console.log("Apollo Server is running ")
})
