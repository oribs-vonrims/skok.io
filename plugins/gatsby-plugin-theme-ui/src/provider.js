// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useCallback, useState, useEffect } from "react"
import { ThemeProvider } from "theme-ui"
// import useEventListener from "../../../src/hooks/useEventListener"
// import isWindow from "../../../src/utils/is-window"
import localTheme from "../../../src/theme"
import components from "../../../src/theme/components"
import isWindow from "../../../src/utils/is-window"

const {
  fonts: { safe: safeFonts },
} = localTheme
const safeFontsTheme = Object.assign({}, localTheme, { fonts: safeFonts })

const Root = ({ children }) => {
  const [theme, setTheme] = useState(safeFontsTheme)
  const [isEveryFontLoaded, setIsEveryFontLoaded] = useState(() =>
    isWindow() ? window.sessionStorage.getItem(`isEveryFontLoaded`) : null
  )

  useEffect(() => {
    const eventHandler = () => {
      const isEveryFontLoaded = window.sessionStorage.getItem(
        `isEveryFontLoaded`
      )
      setIsEveryFontLoaded(isEveryFontLoaded)
    }

    window.addEventListener(`fontloadend`, eventHandler)

    return () => window.removeEventListener(`fontloadend`, eventHandler)
  }, [])

  useEffect(() => {
    if (isEveryFontLoaded) {
      setTheme(localTheme)
      document.documentElement.classList.remove(
        `font-loading-stage-1`,
        `font-loading-stage-2`
      )
    }
  }, [isEveryFontLoaded])

  return (
    <ThemeProvider theme={theme} components={components}>
      {children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
