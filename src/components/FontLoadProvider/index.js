import React, { createContext } from "react"
import useFontFaceObserver from "use-font-face-observer"
import { FONTS } from "../../utils/constants"

const { code, body, heading } = FONTS
const fontFaces = [
  {
    family: heading,
    style: `italic`,
  },
  {
    family: body,
  },
  {
    family: code,
    style: `italic`,
  },
  {
    family: code,
  },
]

const FontLoadContext = createContext()

const FontLoadProvider = ({ children }) => {
  const isFontListLoaded = useFontFaceObserver(fontFaces)

  return (
    <FontLoadContext.Provider value={isFontListLoaded}>
      {children}
    </FontLoadContext.Provider>
  )
}

export { FontLoadContext, FontLoadProvider }
