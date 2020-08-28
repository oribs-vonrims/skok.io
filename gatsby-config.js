const path = require("path")
const siteMetadata = require("./site-metadata")

require("dotenv").config({ path: `.env` })

const gatsbyRemarkPlugins = [
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1200,
      withWebp: true,
      quality: 100,
      loading: `lazy`,
      linkImagesToOriginal: false,
    },
  },
]

module.exports = {
  siteMetadata, // what's the point of this?
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(`./src/posts`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
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
        short_name: `VS`,
        description: `Personal blog about web development.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#11e`,
        display: `standalone`,
        icon: `static/favicon-dark.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteMetadata.siteUrl,
        // generate sitemap after moving on `skok.io`
        sitemap: null,
        // allow all after moving on `skok.io domain`
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: `skok.club`,
        identity: {
          twitter: `iamskok`,
          github: `iamskok`,
        },
        mentions: true,
        pingbacks: true,
        forwardPingbacksAsWebmentions: `https://brid.gy`,
        domain: `skok.club`,
        fetchLimit: 10000,
        token: process.env.WEBMENTION_TOKEN,
      },
    },
    {
      resolve: `@martinreiche/gatsby-firestore`,
      options: {
        appConfig: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appID: process.env.FIREBASE_APP_ID,
          measurmentID: process.env.FIREBASE_MEASUREMENT_ID,
        },
        types: [
          {
            type: `Posts`,
            collection: `posts`,
            map: doc => ({ ...doc }),
            subCollections: [
              {
                type: `Tweets`,
                collection: `tweets`,
                map: doc => ({ ...doc }),
              },
            ],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `gatsby-optional-chaining`,
  ],
}
