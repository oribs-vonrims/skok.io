import debounce from "lodash.debounce"
import updateBrowserTab from "./src/utils/update-browser-tab"
import setThemeFavicon from "./src/utils/set-theme-favicon"
import setInactiveFavicon from "./src/utils/set-inactive-favicon"
import setFavicon from "./src/utils/set-favicon"
import bustCache from "./src/utils/bust-cache"
import fontObserver from "./src/utils/font-observer"
import { wrapRootElement } from "./src/components/WrapRootElement"

// TODO: Add dynamic title in templates.
const title = document.querySelector(`title`).textContent

const onBlogPostScroll = debounce(() => {
  updateBrowserTab(title)
}, 200)

const onRouteUpdate = ({ location }) => {
  const blogPostRegex = /\/blog\/.+/

  if (blogPostRegex.test(location.pathname)) {
    window.addEventListener(`scroll`, onBlogPostScroll)
  } else {
    window.removeEventListener(`scroll`, onBlogPostScroll)
    setThemeFavicon()
  }
}

const onClientEntry = () => {
  console.log(
    "sessionStorage.isEveryFontLoaded",
    sessionStorage.isEveryFontLoaded
  )
  if (sessionStorage.isEveryFontLoaded) {
    document.documentElement.classList.add(`font-loading-stage-2`)
    console.log("add font-loading-stage-2")
  } else {
    // document.documentElement.classList.add(`font-loading-stage-1`)
    // console.log("add font-loading-stage-1")

    window.onload = () => fontObserver()
  }

  setThemeFavicon()

  let visibilityTimer = null
  let oldFavicon = null

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === `hidden`) {
      oldFavicon = document.querySelector(`link[rel="icon"]`)

      visibilityTimer = setTimeout(() => {
        setInactiveFavicon()
        visibilityTimer = null
      }, 5000)
    } else {
      if (visibilityTimer) {
        clearTimeout(visibilityTimer)
        visibilityTimer = null
      }

      setInactiveFavicon.clear()

      // Remove old URL params
      const oldFaviconPath = oldFavicon.href.split(`?`)[0]
      setFavicon(bustCache(oldFaviconPath))
    }
  })
}

export { wrapRootElement, onRouteUpdate, onClientEntry }
