import React from "react"
import { Global } from "@emotion/core"
import fontFaces from "../../theme/fontFaces"

const GlobalStyles = () => (
  <Global
    styles={theme => ({
      html: {
        fontSize: `125%`,
        height: `100%`,
      },
      "body, #___gatsby, #gatsby-focus-wrapper": {
        height: `100%`,
      },
      fontFaces,
    })}
  />
)

export default GlobalStyles
