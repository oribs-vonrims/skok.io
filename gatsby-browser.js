import { wrapRootElement } from "./src/components/WrapRootElement"
import fontObserver from "./src/utils/font-observer"
import dispatchFontsLoadedEvent from "./src/utils/dispatch-fonts-loaded-event"

const onClientEntry = () => {
  if (sessionStorage.fontsLoaded) {
    dispatchFontsLoadedEvent()
  } else {
    document.documentElement.classList.add(`font-loading-stage-1`)

    window.onload = () => console.log("onCliententry") || fontObserver()
  }
}

export { wrapRootElement, onClientEntry }
