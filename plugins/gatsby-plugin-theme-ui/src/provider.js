/** @jsx jsx */
import {
  jsx,
  ThemeProvider,
  // merge,
} from "theme-ui"
// import localTheme from "./index"
// import components from "./components"
// import useThemeUiConfig from "./hooks/configOptions"
import { useState, useEffect } from "react"
import localTheme from "../../../src/theme/index"
import components from "../../../src/theme/components"
import fontObserver from "../../../src/utils/font-observer"
import isWindow from "../../../src/utils/is-window"

// Create initial safe fonts theme.
const {
  fonts: { safe: safeFonts },
} = localTheme
const safeFontsTheme = {
  ...Object.assign({}, localTheme, { fonts: safeFonts }),
}

const Root = ({ children }) => {
  useEffect(() => fontObserver(), [])

  const isEveryFontLoaded = isWindow()
    ? sessionStorage.getItem(`isEveryFontLoaded`)
    : false

  return (
    <ThemeProvider
      theme={isEveryFontLoaded ? localTheme : safeFontsTheme}
      components={components}
    >
      {children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
