import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import PreloadLinks from "./PreloadLinks"
import MetaTags from "./MetaTags"
import Title from "./Title"

const Head = () => {
  const { title, description, author } = useSiteMetadata()

  return (
    <>
      <Title>{title}</Title>
      <MetaTags title={title} description={description} author={author} />
      <PreloadLinks />
    </>
  )
}

export default Head
