const siteUrl = require("./site-url")
const seo = require("./seo")
const pages = require("./pages")
const colorModes = require("./color-modes")
const favicons = require("./favicons")
const components = require("./components")

const config = {
  ...seo,
  pages,
  siteUrl,
  colorModes,
  favicons,
  components,
}

module.exports = config
