const productResolvers = require("./productResolver");
const usersResolvers = require("./userResolver");
const categoryResolvers = require("./categoryResolver");
// const commentsResolvers = require("./comments");

module.exports = {
  Product: {
    // likeCount: (parent) => parent.likes.length,
    // commentCount: (parent) => parent.comments.length,
  },
  Query: {
    // ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...productResolvers.Mutation,
    ...categoryResolvers.Mutation,
  },
  //   Subscription: {
  //     ...postsResolvers.Subscription,
  //   },
};
