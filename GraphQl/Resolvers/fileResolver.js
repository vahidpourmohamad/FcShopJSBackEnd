const path = require("path");
const fs = require("fs");
module.exports = {
  Query: {},
  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { stream, filename, mimetype, encoding } = await file;
      const rstream = fs.createReadStream();
      const pathName = path.join(__dirname, `/public /images/${filename}`);
      await rstream.pipe(fs.createWriteStream(pathName));

      return { filename, mimetype, encoding, url: "" };
    },
  },
};
