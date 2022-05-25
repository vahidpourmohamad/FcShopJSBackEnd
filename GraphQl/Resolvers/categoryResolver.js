const category = require("../../Models/categoryModel.js");

module.exports = {
  Query: {
    async getCatgories() {
      try {
        const categories = await category.find().sort({ createdAt: -1 });
        return categories;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getCategory(_, { categoryId }) {
      try {
        const findedCategory = await category
          .findById(categoryId)
          .sort({ createdAt: -1 });
        return findedCategory;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async deleteCategory(_, { CategoryID }) {
      try {
        const deletedCategory = await category.findById(CategoryID);
        await deletedCategory.delete();
        return "One Category Document has been deleted";
      } catch (error) {
        throw new Error(error);
      }
    },
    async createCategory(
      _,
      { CategoryInput: { name, parentId, uniUrl, imageSrc } }
    ) {
      console.log("test");
      const newCategory = category({
        name: name,
        parent: parentId,
        imageSrc: imageSrc,
        uniUrl: uniUrl,
        createdAt: new Date().toISOString(),
      });
      const res = await newCategory.save();
      console.log(res);
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
