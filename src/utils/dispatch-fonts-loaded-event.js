const dispatchFontsLoadedEvent = () => {
  document.documentElement.classList.add(`font-loading-stage-2`)

  // Dispatch event to notify ThemeUIProvider component
  const fontsLoadedEvent = new CustomEvent(`fontsloadend`)
  window.dispatchEvent(fontsLoadedEvent)
}

export default dispatchFontsLoadedEvent
