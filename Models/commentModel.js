const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  userCreatedId: String,
  productId: String,
  body: String,
  point: String,
  createdAt: String,
});

module.exports = model("Comment", commentSchema);
