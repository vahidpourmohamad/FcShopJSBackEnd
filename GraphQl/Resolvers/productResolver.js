const product = require("../../Models/productsModel.js");
const { AuthenticationError } = require("apollo-server");

module.exports = {
  Query: {
    async getProducts() {
      try {
        const products = await product.find().sort({ createdAt: -1 });
        return products;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getProduct(_, { productId }) {
      try {
        const findedProduct = await product
          .findById(productId)
          .sort({ createdAt: -1 });
        return findedProduct;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getProdoctsListByCategory(_, { categoryName }) {
      try {
        const products = await product
          .find({ category: categoryName })
          .sort({ createdAt: -1 });
        return products;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async deleteProduct(_, { productID }) {
      try {
        const deletedProduct = await product.findById(productID);
        await deletedProduct.delete();
      } catch (error) {
        throw new Error(error);
      }

      return "finish";
    },
    async createProduct(
      _,
      {
        ProductInput: {
          pcode,
          name,
          category,
          OLname,
          price,
          shortDescription,
          LongDescription,
          OLshortDescription,
          OLLongDescription,
          H,
          W,
          L,
          wieght,
          color,
          material,
        },
      }
    ) {
      const newProduct = product({
        pcode: pcode,
        name: name,
        category: category,
        OLname: OLname,
        price: price,
        shortDescription: shortDescription,
        LongDescription: LongDescription,
        OLshortDescription: OLshortDescription,
        OLLongDescription: OLLongDescription,
        H: H,
        W: W,
        L: L,
        wieght: wieght,
        color: color,
        material: material,
        createdAt: new Date().toISOString(),
      });
      const res = await newProduct.save();
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
