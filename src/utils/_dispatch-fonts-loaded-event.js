const dispatchFontsLoadEndEvent = () => {
  document.documentElement.classList.add(`font-loading-stage-2`)

  // Dispatch event to notify ThemeUIProvider component
  const fontsLoadEndEvent = new CustomEvent(`fontsloadend`)
  window.dispatchEvent(fontsLoadEndEvent)
}

export default dispatchFontsLoadEndEvent
