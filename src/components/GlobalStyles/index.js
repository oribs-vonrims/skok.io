import React from "react"
import { Global } from "@emotion/core"
import { useThemeUI } from "theme-ui"
import {
  interFontFace,
  amstelvarFontFace,
  dankMonoFontFace,
  dankMonoItalicFontFace,
} from "../../gatsby-plugin-theme-ui/fontFaces"

const GlobalStyles = () => {
  const {
    theme: {
      breakpoints: [tablet],
    },
  } = useThemeUI()

  const styles = {
    html: {
      fontSize: `125%`,
      height: `100%`,
      overflowY: `scroll`,
      scrollBehavior: `smooth`,
      [`@media (min-width: ${tablet})`]: {
        fontSize: `150%`,
      },
    },
    [`body,
    #___gatsby,
    #gatsby-focus-wrapper`]: {
      height: `100%`,
    },
  }

  const fontFaces = [
    interFontFace,
    amstelvarFontFace,
    dankMonoFontFace,
    dankMonoItalicFontFace,
  ]

  return <Global styles={[...fontFaces, styles]} />
}

export default GlobalStyles
