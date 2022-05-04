const { module, Schema } = require("mongoose");
const productSchema = new Schema({
  id: { type: String, default: "123456789" },
  name: { type: String, default: "ProductA" },
  category: { type: String, default: "None" },
  OLname: { type: String, default: "Produkt" },
  price: { type: String, default: "1000" },
  shortDescription: { type: String, default: "این یک کالاس خاص است" },
  LongDescription: { type: String, default: "<h1> این خیلی خاص است</h1>" },
  OLshortDescription: {
    type: String,
    default: "Dies ist eine besondere Klasse",
  },
  OLLongDescription: {
    type: String,
    default: "<H1>Dies ist eine besondere Klasse</H1>",
  },
  H: { type: Number, default: "1" },
  W: { type: Number, default: "1" },
  L: { type: Number, default: "1" },
  wieght: { type: Number, default: "1" },
  color: { type: String, default: "WeiB" },
  material: { type: String, default: "None" },
  createdAt: { type: String, default: "None" },
});

module.exports = model("Product", productSchema);
