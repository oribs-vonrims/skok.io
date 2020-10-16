import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import PreloadLinks from "./PreloadLinks"
import MetaTags from "./MetaTags"

const Head = () => {
  const { title, description, author } = useSiteMetadata()

  return (
    <Helmet>
      <title>{title}</title>
      <MetaTags title={title} description={description} author={author} />
      <PreloadLinks />
    </Helmet>
  )
}

export default Head
