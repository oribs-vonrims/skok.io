import React from "react"
import { Global } from "@emotion/core"
import fontFaces from "../../theme/fonts/fontFaces"
import fontLoadingStages from "../../theme/fonts/fontLoadingStages"

const styles = `
  ${fontFaces}
  ${fontLoadingStages}

  html {
    font-size: 125%;
    height: 100%;
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`

const GlobalStyles = () => <Global styles={styles} />

export default GlobalStyles
