import dispatchFontsLoadEndEvent from "./dispatch-fonts-loaded-event"

const fontObserver = () => {
  if (`fonts` in document) {
    Promise.all([
      document.fonts.load(`400 1em "Amstelvar"`),
      document.fonts.load(`italic 400 1em "Amstelvar"`),
      document.fonts.load(`400 1em "Inter var"`),
      document.fonts.load(`400 1em "Fira Code VF"`),
    ]).then(() => {
      dispatchFontsLoadEndEvent()

      // Optimization for repeat views
      sessionStorage.isEveryFontLoaded = true
    })
  }
}

export default fontObserver
