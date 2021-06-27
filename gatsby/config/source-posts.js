const path = require("path")
const { POSTS_PATH } = require("../../config/paths")

const sourcePosts = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: path.resolve(POSTS_PATH),
  },
}

module.exports = sourcePosts
