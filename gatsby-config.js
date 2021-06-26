const path = require("path")
const remarkSlug = require("remark-slug")
const siteMetadata = require("./site-metadata")
const slashify = require("./src/utils/slashify")
const { POSTS_PATH, IMAGES_PATH } = require("./src/utils/constants")

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(IMAGES_PATH),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(POSTS_PATH),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              withWebp: true,
              quality: 100,
              loading: `lazy`,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgo: false,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vladimir Skok`,
        short_name: `skok.dev`,
        description: `Software engineering blog`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#11e`,
        display: `standalone`,
        icon: `static/favicon-dark.svg`,
      },
    },
    {
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
        resolvePages: ({ allMdx: { nodes: mdxNodes } }) => {
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

          const allArticles = mdxNodes.map(
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
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: `*` }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: ``,
            host: ``,
          },
          "deploy-preview": {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
            sitemap: ``,
            host: ``,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [`fonts`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
