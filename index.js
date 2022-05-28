// const { ApolloServer } = require("apollo-server");
// const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB, Port } = require("./Config.js");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
// const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");

const { finished } = require("stream/promises");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }),
//   csrfPrevention: true,
// });
// await server.start();
// const app = express();
// app.use(graphqlUploadExpress());
// server.applyMiddleware({ app });

// mongoose
//   .connect(MONGODB, { useNewUrlParser: true })
//   .then(() => {
//     console.log("MongoDB Connected");
//     return server.listen({ port: Port });
//   })
//   .then((res) => {
    
//     console.log(`Server running at ${res.url}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Using graphql-upload without CSRF prevention is very insecure.
    csrfPrevention: false,
  });
  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  // await new Promise<void> (r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return app.listen({ port: Port });
  })
  .then(() => {
    
    console.log(`Server running at ${Port}`);
  })
  .catch((err) => {
    console.error(err);
  });
}
startServer();