/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import Select from "../select"
import { REGEX_PATTERN, SITE_METADATA } from "../constants"

const {
  creator,
  pages: { home, blog, contact, about, article },
} = SITE_METADATA

const pageMetadata = ({ title, description, image, imageAlt }) => ({
  title,
  description,
  image,
  imageAlt,
})

const initialState = {
  creator,
  ...pageMetadata(home),
}

const renderPreContent = ({ title, description, image, imageAlt, creator }) =>
  `
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta name="twitter:image:alt" content="${imageAlt}" />
  <meta name="twitter:creator" content="${creator}" />
`.replace(REGEX_PATTERN, ``)

const TwitterPlayground = () => {
  const [state, setState] = useState(initialState)
  const [selectedPage, setSelectedPage] = useState(`home`)

  const handlePageSelection = event => setSelectedPage(event.target.value)

  useEffect(() => {
    if (selectedPage === `home`) {
      setState(initialState)
    }
    if (selectedPage === `blog`) {
      setState({
        creator,
        ...pageMetadata(blog),
      })
    }
    if (selectedPage === `about`) {
      setState({
        creator,
        ...pageMetadata(about),
      })
    }
    if (selectedPage === `contact`) {
      setState({
        creator,
        ...pageMetadata(contact),
      })
    }
    if (selectedPage === `article`) {
      setState({
        creator,
        ...pageMetadata(article),
      })
    }
  }, [selectedPage])

  return (
    <Fragment>
      <Select onChange={handlePageSelection} />
      <Flex sx={{ overflowX: `auto` }}>
        <pre>{renderPreContent(state)}</pre>
      </Flex>
    </Fragment>
  )
}

export default TwitterPlayground
