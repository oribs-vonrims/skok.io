const siteMetadata = require("./site-metadata")
const forceFileLoader = require("./gatsby/config/force-file-loader")
const robotsTxt = require("./gatsby/config/robots-txt")
const manifest = require("./gatsby/config/manifest")
const svgrSvgo = require("./gatsby/config/svgr-svgo")
const sharp = require("./gatsby/config/sharp")
const mdx = require("./gatsby/config/mdx")
const sourcePosts = require("./gatsby/config/source-posts")
const sourceImages = require("./gatsby/config/source-images")
const sitemap = require("./gatsby/config/sitemap")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  SITE_URL,
  URL: NETLIFY_SITE_URL = SITE_URL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === `production`
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    siteUrl,
  },
  plugins: [
    sourceImages,
    sourcePosts,
    mdx,
    sharp,
    svgrSvgo,
    manifest,
    sitemap,
    robotsTxt,
    forceFileLoader,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
