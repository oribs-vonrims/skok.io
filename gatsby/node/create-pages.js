const path = require("path")
const pages = require("../../config/pages")
const {
  tableOfContents: tableOfContentsConfig,
} = require("../../config/components")
const slashify = require("../../src/utils/slashify")
const { POST_TEMPLATE_PATH } = require("../../config/paths")

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
          tableOfContents: { items: tableOfContentsItems },
          frontmatter: { hasIntro: hasTableOfContentsInto },
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

      const toc = getTableOfContents(
        tableOfContentsItems,
        hasTableOfContentsInto
      )

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

// Get the list of all header ids per post
const getHeaderIds = (items = []) =>
  items.reduce((acc, { url, items: childItems }) => {
    if (url) {
      acc.push(url.replace(`#`, ``))
    }

    if (childItems) {
      acc.push(...getHeaderIds(childItems))
    }

    return acc
  }, [])

// Get all table of contents data per post
const getTableOfContents = (items = [], hasIntro) => {
  const { introId, introTitle } = tableOfContentsConfig
  const introItem = {
    url: `#${introId}`,
    title: introTitle,
  }
  const allItems = hasIntro ? [introItem, ...items] : items

  return {
    ids: getHeaderIds(allItems),
    items: allItems,
  }
}

module.exports = createPages
