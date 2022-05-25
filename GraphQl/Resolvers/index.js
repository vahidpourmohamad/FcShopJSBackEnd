const productResolvers = require("./productResolver");
const usersResolvers = require("./userResolver");
const categoryResolvers = require("./categoryResolver");
const fileResolvers = require("./fileResolver");
// const commentsResolvers = require("./comments");

module.exports = {
  Product: {
    // likeCount: (parent) => parent.likes.length,
    // commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...productResolvers.Query,
    ...categoryResolvers.Query,
    ...usersResolvers.Query,
    ...fileResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...productResolvers.Mutation,
    ...categoryResolvers.Mutation,
    ...fileResolvers.Mutation,
  },
  //   Subscription: {
  //     ...postsResolvers.Subscription,
  //   },
};
