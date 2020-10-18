import React from "react"
import { Helmet } from "react-helmet"
import dispatchFontsLoadedEvent from "../../utils/dispatch-fonts-loaded-event"

const Script = () => {
  return (
    <Helmet>
      <script>
        {`
          if (sessionStorage.isEveryFontLoaded) {
            (${dispatchFontsLoadedEvent})()
          }
        `}
      </script>
    </Helmet>
  )
}

export default Script
