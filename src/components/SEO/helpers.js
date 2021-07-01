import slashify from "../../utils/slashify"

const getCurrentUrl = ({
  siteUrl,
  pathName,
  slug,
  pages: {
    blog: { pathName: blogPathName },
  },
  activePages: { isHome, isArticle },
}) =>
  isHome
    ? siteUrl
    : isArticle
    ? slashify(siteUrl, blogPathName, slug)
    : slashify(siteUrl, pathName)

const getActivePages = ({ pages, pageId }) =>
  Object.entries(pages).reduce((acc, page) => {
    const [name, { id }] = page
    const [firstLetter, ...remainingLetters] = name
    const key = `is` + firstLetter.toUpperCase() + remainingLetters.join(``)
    acc[key] = id === pageId

    return acc
  }, {})

const getImageUrls = ({ images, siteUrl }) =>
  Object.entries(images).reduce((acc, image) => {
    const [
      key,
      {
        images: {
          fallback: { src: path },
        },
      },
    ] = image
    const url = `${siteUrl}${path}`
    acc[`${key}ImageUrl`] = url

    return acc
  }, {})

export { getCurrentUrl, getActivePages, getImageUrls }
