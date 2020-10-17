const dispatchFontsLoadedEvent = () => {
  alert("hey")
  document.documentElement.classList.add(`font-loading-stage-2`)

  // Dispatch event to notify ThemeUIProvider component
  const fontsLoadedEvent = new CustomEvent(`FONTS_LOADED`)
  window.dispatchEvent(fontsLoadedEvent)
}

export default dispatchFontsLoadedEvent
