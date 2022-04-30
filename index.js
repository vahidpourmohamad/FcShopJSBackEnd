const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB } = require("./Config.js");
const { ServerType } = require("mongodb");

const typeDefs = gql`
  type Query {
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

const uri =
  "mongodb+srv://CallSale:Cmpwx5u6@cluster0.3zwwq.mongodb.net/CallSale?retryWrites=true&w=majority";

const db = uri;
mongoose.Promise = global.Promise;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return ServerType.listen({ port: 10000 });
  })
  .then((res) => {
    console.log(`Server runnig at ${res.url}`);
  });

// mongoose
//   .connect(
//     "mongodb+srv://CallSale:Cmpwx5u6@cluster0.3zwwq.mongodb.net/CallSale?retryWrites=true&w=majority",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     return ServerType.listen({ port: 10000 });
//   })
//   .then((res) => {
//     console.log(`Server runnig at ${res.url}`);
//   });
