/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import CodeBlock from "../../../../../src/components/code-block"
import Select from "../common/select"
import { REGEX_PATTERN, SITE_METADATA } from "../common/constants"

const {
  siteName,
  author,
  language,
  pages: { home, blog, contact, about },
} = SITE_METADATA

const pageMetadata = ({
  type,
  url,
  title,
  description,
  image,
  imageAlt,
  published,
  modified,
}) => ({
  type,
  url,
  title,
  description,
  image,
  imageAlt,
  published,
  modified,
})

const initialState = {
  siteName,
  language,
  ...pageMetadata(home),
}

const renderPreContent = ({
  isArticle,
  url,
  siteName,
  language,
  title,
  description,
  image,
  imageAlt,
  published,
  modified,
  author,
}) => {
  const base = `
    <meta property="og:type" content="${isArticle ? `article` : `website`}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:locale" content="${language}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${imageAlt}" />
  `

  const article = `
    <meta property="article:published_time" content="${published}" />
    <meta property="article:modified_time" content="${modified}" />
    <meta property="article:author" content="${author}" />
  `

  return (isArticle ? `${base}${article}` : base).replace(REGEX_PATTERN, ``)
}

const OpenGraphPlayground = () => {
  const [state, setState] = useState(initialState)
  const [selectedPage, setSelectedPage] = useState(`home`)
  const handlePageSelection = event => setSelectedPage(event.target.value)

  useEffect(() => {
    if (selectedPage === `home`) {
      setState(initialState)
    }
    if (selectedPage === `blog`) {
      setState({
        siteName,
        language,
        ...pageMetadata(blog),
      })
    }
    if (selectedPage === `about`) {
      setState({
        siteName,
        language,
        ...pageMetadata(about),
      })
    }
    if (selectedPage === `contact`) {
      setState({
        siteName,
        language,
        ...pageMetadata(contact),
      })
    }
    if (selectedPage === `article`) {
      setState({
        isArticle: true,
        siteName,
        language,
        author,
      })
    }
  }, [selectedPage])

  return (
    <Fragment>
      <Select onChange={handlePageSelection} />
      <CodeBlock className="language-html">{renderPreContent(state)}</CodeBlock>
    </Fragment>
  )
}

export default OpenGraphPlayground
