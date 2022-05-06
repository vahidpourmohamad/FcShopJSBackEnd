const product = require("../../Models/productsModel.js");
const { AuthenticationError } = require("apollo-server");

module.exports = {
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
