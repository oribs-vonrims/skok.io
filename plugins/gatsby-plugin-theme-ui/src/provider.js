import React, { useState, useEffect } from "react"
import { ThemeProvider } from "theme-ui"
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

const isEveryFontLoaded = () =>
  isWindow() ? sessionStorage.getItem(`isEveryFontLoaded`) : false

const Root = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    isEveryFontLoaded() ? localTheme : safeFontsTheme
  )

  useEffect(() => {
    fontObserver().then(() => {
      setTheme(localTheme)
      sessionStorage.isEveryFontLoaded = true
    })
  }, [])

  return (
    <ThemeProvider theme={theme} components={components}>
      {children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
