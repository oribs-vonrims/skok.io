const slashify = require("../../src/utils/slashify")
const siteMetadata = require("../../site-metadata")

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

const sitemap = {
  resolve: `gatsby-plugin-sitemap`,
  options: {
    query: `{
      allMdx {
        nodes {
          frontmatter {
            datePublished
            dateModified
          }
          fields {
            slug
          }
        }
      }
    }`,
    resolveSiteUrl: () => siteUrl,
    resolvePages: ({ allMdx: { nodes } }) => {
      const { pages } = siteMetadata
      const {
        blog: { pathName: blogPathName },
      } = pages

      const allPages = Object.values(pages).reduce((acc, { pathName }) => {
        if (pathName) {
          acc.push({ path: slashify(pathName) })
        }
        return acc
      }, [])

      const allArticles = nodes.map(
        ({
          frontmatter: { datePublished, dateModified },
          fields: { slug },
        }) => ({
          path: slashify(blogPathName, slug),
          lastmod: dateModified ? dateModified : datePublished,
        })
      )

      return [...allPages, ...allArticles]
    },
    serialize: ({ path: url, lastmod }) => ({
      url,
      lastmod,
    }),
  },
}

module.exports = sitemap
