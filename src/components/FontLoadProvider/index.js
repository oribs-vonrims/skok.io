import React, { createContext } from "react"
import useFontFaceObserver from "use-font-face-observer"
import { FONTS } from "../../utils/constants"

const FontLoadContext = createContext()

const FontLoadProvider = ({ children }) => {
  const { code, body, heading } = FONTS
  const isLoaded = useFontFaceObserver([
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
  ])

  return (
    <FontLoadContext.Provider value={isLoaded}>
      {children}
    </FontLoadContext.Provider>
  )
}

export { FontLoadContext, FontLoadProvider }
