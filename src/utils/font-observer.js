import dispatchFontsLoadedEvent from "./dispatch-fonts-loaded-event"

const fontObserver = () => {
  if (`fonts` in document) {
    Promise.all([
      document.fonts.load(`400 1em "Amstelvar"`),
      document.fonts.load(`italic 400 1em "Amstelvar"`),
      document.fonts.load(`400 1em "Inter var"`),
      document.fonts.load(`400 1em "Fira Code VF"`),
    ]).then(() => {
      dispatchFontsLoadedEvent()

      // Optimization for repeat views
      sessionStorage.fontsLoaded = true
    })
  }
}

export default fontObserver
