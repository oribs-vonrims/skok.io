import React, { useState } from "react"

const SoundContext = React.createContext()

const SoundProvider = ({ children }) => {
  const [sound, setSound] = useState(true)

  return (
    <SoundContext.Provider value={[sound, setSound]}>
      {children}
    </SoundContext.Provider>
  )
}

export { SoundContext, SoundProvider }
