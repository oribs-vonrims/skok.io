const path = require("path")
const { IMAGES_PATH } = require("../../config/paths")

const sourceImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: path.resolve(IMAGES_PATH),
  },
}

module.exports = sourceImages
