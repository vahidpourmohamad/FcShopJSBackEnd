const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  parent: String,
  image: String,
  uniUrl: String,
  createdAt: String,
});

module.exports = model("Category", userSchema);
