import React, { createContext } from "react"
import useFontFaceObserver from "use-font-face-observer"
import { FONTS } from "../../utils/constants"

const FontLoadContext = createContext()

const FontLoadProvider = ({ children }) => {
  const {
    code: codeFontFamily,
    body: bodyFontFamily,
    heading: headingFontFamily,
  } = FONTS

  const fontFaces = [
    {
      family: headingFontFamily,
      style: `italic`,
    },
    {
      family: bodyFontFamily,
    },
    {
      family: codeFontFamily,
      style: `italic`,
    },
    {
      family: codeFontFamily,
    },
  ]

  const isLoaded = useFontFaceObserver(fontFaces)

  return (
    <FontLoadContext.Provider value={isLoaded}>
      {children}
    </FontLoadContext.Provider>
  )
}

export { FontLoadContext, FontLoadProvider }
