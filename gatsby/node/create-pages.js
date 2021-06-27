const path = require("path")
const pages = require("../../config/pages")
const slashify = require("../../src/utils/slashify")
const getToc = require("../../src/utils/get-toc.js")
const { POST_TEMPLATE_PATH } = require("../../src/utils/constants")

const createPages = async ({ actions: { createPage }, graphql, reporter }) => {
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

module.exports = createPages
