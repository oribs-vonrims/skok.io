const fontObserver = () => {
  if (`fonts` in document) {
    return Promise.all([
      document.fonts.load(`400 1em "Amstelvar"`),
      document.fonts.load(`italic 400 1em "Amstelvar"`),
      document.fonts.load(`400 1em "Inter var"`),
      document.fonts.load(`400 1em "Fira Code VF"`),
    ])
  }

  return Promise.reject()
}

export default fontObserver
