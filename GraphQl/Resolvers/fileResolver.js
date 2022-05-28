const path = require("path");
const fs = require("fs");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");

module.exports = {
  Upload: GraphQLUpload,
  Query: {},
  Mutation: {
    singleUpload: async (parent, { file }) => {
      // const { file } = await file;
        const { createReadStream, filename, mimetype, encoding } = await file.file;
       console.log(file);
    const pathName = path.join(__dirname, `/public/images/test.jpg`);
      console.log(pathName);
      const stream = createReadStream(); 
      // 
      
      await stream.pipe(fs.createWriteStream(pathName));
      

      return {
        filename: "filename",
        mimetype: "mimetype",
        encoding: "encoding",
        url: "",
      };
    },
  },
};
