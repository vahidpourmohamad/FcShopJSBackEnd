const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB } = require("./Config.js");
const { ServerType } = require("mongodb");

const typeDefs = gql`
  type Qeury {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "hello",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    return ServerType.listen({ port: 10000 });
  })
  .then((res) => {
    console.log(`Server runnig at ${res.url}`);
  });
