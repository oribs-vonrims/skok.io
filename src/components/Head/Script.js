import React from "react"
import { Helmet } from "react-helmet"
import dispatchFontsLoadedEvent from "../../utils/dispatch-fonts-loaded-event"

const Script = () => {
  return (
    <Helmet>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              if (sessionStorage.fontsLoaded) {
                (${dispatchFontsLoadedEvent})()
              }
            `,
        }}
      />
    </Helmet>
  )
}

export default Script
