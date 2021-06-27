const path = require("path")
const { pages } = require("../../site-metadata")
const slashify = require("../../src/utils/slashify")
const { IMAGES_PATH } = require("../../src/utils/constants")

const onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
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

module.exports = onCreatePage
