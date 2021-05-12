import React, { useState, useEffect, createContext, createRef } from "react"

const heightResizeRef = createRef()
const HeightResizeContext = createContext()

const HeightResizeProvider = ({ children }) => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      setScrollHeight(entries[0].target.scrollHeight)
    )

    resizeObserver.observe(heightResizeRef.current)

    return () => resizeObserver.unobserve(heightResizeRef.current)
  }, [])

  return (
    <HeightResizeContext.Provider value={scrollHeight}>
      {children}
    </HeightResizeContext.Provider>
  )
}

export { HeightResizeContext, HeightResizeProvider, heightResizeRef }
