import comment from "../../Models/commentModel";

module.exports = {
  Query: {
    async getCommentsByProduct(_, { ProductID }) {
      try {
        const comments = await comment
          .find({ productId: ProductID })
          .sort({ createdAt: -1 });
        return comments;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getHighestPointedComment() {
      try {
        const comments = await comment.find().sort({ point: -1 }).limit(5);
        return findedCategory;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async deleteComment(_, { CommentID }) {
      try {
        const deletedcomment = await comment.findById(CommentID);
        await deletedcomment.delete();
      } catch (error) {
        throw new Error(error);
      }

      return "finish";
    },
    async createComment(
      _,
      { CommentInput: { userCreatedId, productId, body, point } }
    ) {
      const newComment = comment({
        userCreatedId: userCreatedId,
        productId: productId,
        body: body,
        point: point,
        createdAt: new Date().toISOString(),
      });
      const res = await newComment.save();
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
