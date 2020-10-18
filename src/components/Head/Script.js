import React from "react"
import { Helmet } from "react-helmet"

const Script = () => (
  <Helmet>
    <script>
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
