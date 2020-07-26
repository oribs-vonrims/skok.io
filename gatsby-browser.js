import { wrapRootElement } from "./src/components/WrapRootElement"
import fontObserver from "./src/utils/font-observer"

const onClientEntry = () => {
  if (!sessionStorage.fontsLoaded) {
    document.documentElement.classList.add(`font-loading-stage-1`)

    window.onload = () => fontObserver()
  }
}

export { wrapRootElement, onClientEntry }
