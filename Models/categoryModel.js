const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  parent: String,
  imageSrc: String,
  uniUrl: String,
  createdAt: String,
});

module.exports = model("Category", categorySchema);
