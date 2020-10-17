import React from "react"
import { Helmet } from "react-helmet"
import dispatchFontsLoadedEvent from "../../utils/dispatch-fonts-loaded-event"

const Script = () => {
  return (
    <Helmet>
      <script
        // Dispatch event has to be inlined in order to be called
        // only once on the initial page load
        dangerouslySetInnerHTML={{
          __html: `
            if (sessionStorage.isEveryFontLoaded) {
              (${dispatchFontsLoadedEvent})()
            }
            `,
        }}
      />
    </Helmet>
  )
}

export default Script
