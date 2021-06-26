const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { pages } = require("./site-metadata")
const slashify = require("./src/utils/slashify")
const getToc = require("./src/utils/get-toc.js")
const { IMAGES_PATH, POST_TEMPLATE_PATH } = require("./src/utils/constants")

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `slug`,
      value: createFilePath({ node, getNode }).replace(/\//g, ``),
      node,
    })
  }
}

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

exports.createPages = ({ actions: { createPage }, graphql }) =>
  graphql(`
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
  `).then(
    ({
      data: {
        allMdx: { edges },
      },
      errors,
    }) => {
      if (errors) {
        return Promise.reject(errors)
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
          const previousPost =
            index === 0
              ? null
              : slashify(blogPathName, edges[index - 1].node.fields.slug)
          const nextPost =
            index === edges.length - 1
              ? null
              : slashify(blogPathName, edges[index + 1].node.fields.slug)

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
  )
