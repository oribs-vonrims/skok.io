const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const getToc = require("./src/utils/get-toc.js")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      value: `/blog${value}`,
      node,
    })
  }
}

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const {
      fields: { slug: pathName },
      tableOfContents: { items: tocItems },
      frontmatter: { hasIntro },
    } = node
    const slug = pathName.replace(`/blog/`, ``).replace(`/`, ``)
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node

    const toc = getToc(tocItems, hasIntro)

    createPage({
      path: pathName,
      component: path.resolve(`src/templates/Post/index.js`),
      context: {
        id: node.id,
        slug,
        prev,
        next,
        toc,
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) =>
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
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const {
      allMdx: { edges },
    } = data

    createPosts(actions.createPage, edges)
  })
