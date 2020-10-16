import React from "react"
import amstelvarRomanWoff2 from "../../fonts/amstelvar-roman-subset.woff2"
import amstelvarItalicWoff2 from "../../fonts/amstelvar-italic-subset.woff2"
import interWoff2 from "../../fonts/inter-subset.woff2"
import firaCodeWoff2 from "../../fonts/fira-code-subset.woff2"

const PreloadLinks = () => (
  <>
    <link
      href={amstelvarRomanWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
    <link
      href={amstelvarItalicWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
    <link
      href={interWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
    <link
      href={firaCodeWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
  </>
)

export default PreloadLinks
