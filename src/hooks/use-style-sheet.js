import { useEffect } from "react"
import isWindow from "../utils/is-window"

const useStyleSheet = (selector, rule) => {
  const styleSheet = isWindow() && document.styleSheets[0]
  const [[property, value]] = Object.entries(rule)
  const cssStyleRule = `
    ${selector} {
      ${property}: ${value};
    }
  `

  styleSheet.insertRule(cssStyleRule)

  useEffect(() => {
    return () => styleSheet.removeRule(0)
  }, [styleSheet, rule])
}

export default useStyleSheet
