const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { pages } = require("./site-metadata")
const slashify = require("./src/utils/slashify")
const getToc = require("./src/utils/get-toc.js")
const { IMAGES_PATH, POST_TEMPLATE_PATH } = require("./src/utils/constants")

// Create slugs from file names
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `slug`,
      value: createFilePath({ node, getNode }).replace(/\//g, ``),
      node,
    })
  }
}

// Pass SEO image data in page context
exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  const pagesMetadata = Object.values(pages)
    .map(({ pathName, image }) => [slashify(pathName), image])
    .filter(([pathName, image]) => pathName && image)

  pagesMetadata.forEach(([pathName, image]) => {
    if (page.path === pathName) {
      deletePage(page)
      createPage({
        ...page,
        context: {
          image: path.join(process.cwd(), IMAGES_PATH, image),
        },
      })
    }
  })
}

// Generate blog posts
exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const {
    data: {
      allMdx: { edges },
    },
    errors,
  } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            tableOfContents
            frontmatter {
              hasIntro
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild(`There was an error loading posts`, errors)
    return
  }

  edges.forEach(
    (
      {
        node: {
          id,
          fields: { slug },
          tableOfContents: { items: tocItems },
          frontmatter: { hasIntro },
        },
      },
      index
    ) => {
      const {
        blog: { pathName: blogPathName },
      } = pages

      // Create next and previous post links for the current post.
      const previousPost =
        index === 0
          ? null
          : slashify(blogPathName, edges[index - 1].node.fields.slug)
      const nextPost =
        index === edges.length - 1
          ? null
          : slashify(blogPathName, edges[index + 1].node.fields.slug)

      // Generate table of contents data
      const toc = getToc(tocItems, hasIntro)

      createPage({
        path: slashify(blogPathName, slug),
        component: path.resolve(POST_TEMPLATE_PATH),
        context: {
          id,
          slug,
          previousPost,
          nextPost,
          toc,
        },
      })
    }
  )
}
