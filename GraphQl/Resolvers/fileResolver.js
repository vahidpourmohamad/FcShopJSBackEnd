const path = require("path");
const fs = require("fs");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const { makeUniqueId } = require("../../util/helperFunctions");

module.exports = {
  Upload: GraphQLUpload,
  Query: {},
  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } =
        await file.file;
      let UID = makeUniqueId(10);
      const pathName = path.join("d:/developing", `/public/${UID}.jpg`);
      const stream = createReadStream();
      await stream.pipe(fs.createWriteStream(pathName));
      return {
        filename: `${UID}.jpg`,
        mimetype: mimetype,
        encoding: encoding,
        url: pathName,
      };
    },
  },
};
