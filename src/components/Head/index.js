import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import PreloadLinks from "./PreloadLinks"
import MetaTags from "./MetaTags"
import amstelvarFontFaces from "../../assets/fonts/amstelvar"
import interFontFace from "../../assets/fonts/inter"
import dankMonoFontFaces from "../../assets/fonts/dank-mono"
import fonts from "../../theme/styles/fonts"
import pageHeight from "../../theme/styles/page-height"

const Head = () => {
  const { title, description, author } = useSiteMetadata()

  return (
    <>
      <Title>{title}</Title>
      <PreloadLinks />
      <MetaTags title={title} description={description} author={author} />
      <Helmet>
        <style type="text/css" name="font-faces">
          {`
          ${amstelvarFontFaces}
          ${interFontFace}
          ${dankMonoFontFaces}
        `}
        </style>
        <style type="text/css" name="font-size">
          {`
          html {
            font-size: 125%;
          }
        `}
        </style>
        <style type="text/css" name="font-loading-stage">{`${fonts}`}</style>
        <style name="page-height">{`${pageHeight}`}</style>
      </Helmet>
    </>
  )
}

export default Head
