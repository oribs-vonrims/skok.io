// eslint-disable-next-line import/no-extraneous-dependencies
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

const Root = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    isWindow() && sessionStorage.getItem(`isEveryFontLoaded`)
      ? localTheme
      : safeFontsTheme
  )

  useEffect(() => {
    function checkSessionStorage(event) {
      if (event.storageArea === sessionStorage) {
        const isEveryFontLoaded = sessionStorage.getItem(`isEveryFontLoaded`)

        if (isEveryFontLoaded) {
          setTheme(localTheme)
        }
      }
    }

    window.addEventListener(`storage`, checkSessionStorage)

    return () => window.removeEventListener(`storage`, checkSessionStorage)
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
