const fontObserver = () => {
  if (`fonts` in document) {
    Promise.all([
      document.fonts.load(`400 1em "Amstelvar"`),
      document.fonts.load(`italic 400 1em "Amstelvar"`),
      document.fonts.load(`400 1em "Inter var"`),
      document.fonts.load(`400 1em "Dank Mono"`),
      document.fonts.load(`italic 400 1em "Dank Mono"`),
    ]).then(() => {
      window.dispatchEvent(new Event(`fontloadend`))
      sessionStorage.setItem(`isEveryFontLoaded`, true)
    })
  }
}

export default fontObserver
