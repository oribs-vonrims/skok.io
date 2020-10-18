import React from "react"
import { Helmet } from "react-helmet"

const Script = () => (
  <Helmet>
    <script>
      {/*
        When all custom fonts are loaded:
        1. append temporary class to avoid FOUT
        2. trigger `theme-ui` provider to swap fonts
      */}
      {`
        if (sessionStorage.getItem("isEveryFontLoaded")) {
          document.documentElement.classList.add("font-loading-stage-2")
          window.dispatchEvent(new Event("fontloadend"))
        }
      `}
    </script>
  </Helmet>
)

export default Script
