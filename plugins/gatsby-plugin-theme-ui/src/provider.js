// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useCallback, useState, useEffect } from "react"
import { ThemeProvider } from "theme-ui"
import useEventListener from "../../../src/hooks/useEventListener"
// import isWindow from "../../../src/utils/is-window"
import localTheme from "../../../src/theme"
import components from "../../../src/theme/components"

const {
  fonts: { safe: safeFonts },
} = localTheme
const safeFontsTheme = Object.assign({}, localTheme, { fonts: safeFonts })

const Root = ({ children }) => {
  const [theme, setTheme] = useState(safeFontsTheme)

  const updateTheme = useCallback(() => {
    setTheme(localTheme)
    document.documentElement.classList.remove(
      `font-loading-stage-1`,
      `font-loading-stage-2`
    )
  }, [setTheme])

  useEventListener(
    typeof window !== "undefined" && window,
    "fontsloadend",
    updateTheme
  )

  useEffect(() => {
    updateTheme()
    sessionStorage.getItem(`isEveryFontLoaded`)
  }, [updateTheme])

  return (
    <ThemeProvider theme={theme} components={components}>
      {children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
