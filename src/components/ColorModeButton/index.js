/** @jsx jsx */
import { useState, useContext } from "react"
import { jsx, IconButton, useColorMode } from "theme-ui"
import useSound from "use-sound"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { SoundContext } from "../SoundProvider"
import switchOn from "../../assets/sounds/switch-on.mp3"
import setFavicon from "../../utils/set-favicon"

const ColorModeButton = props => {
  const [sound] = useContext(SoundContext)
  const [playSwitchOn] = useSound(switchOn)

  const [highlight, setHighlight] = useState(false)
  const addHighlight = () => setHighlight(true)
  const removeHighlight = () => setHighlight(false)

  const { colorModes, favicons } = useSiteMetadata()
  const [colorMode, setColorMode] = useColorMode()

  const [turn, setTurn] = useState(0)
  const turnButton = () => setTurn(turn < 1 ? 1 : 0)

  const { light: faviconLight, dark: faviconDark } = favicons

  const clickHandler = () => {
    const index = colorModes.indexOf(colorMode)
    const next = colorModes[(index + 1) % colorModes.length]
    setColorMode(next)
    turnButton()

    next === `default` ? setFavicon(faviconDark) : setFavicon(faviconLight)

    sound && playSwitchOn()
  }

  return (
    <IconButton
      {...props}
      onFocus={addHighlight}
      onBlur={removeHighlight}
      onTouchStart={addHighlight}
      onTouchEnd={removeHighlight}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      aria-label="Toggle website theme"
      onClick={clickHandler}
      sx={{
        cursor: `pointer`,
        padding: 0,
        width: `iconButton`,
        height: `iconButton`,
        marginX: 0,
        color: highlight ? `secondary` : `primary`,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentColor"
        sx={{
          display: `flex`,
          margin: `0 auto`,
          transition: `transform 400ms ease`,
          transform: `rotate(${turn * 180}deg)`,
        }}
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path d="M 16 0 A 16 16 0 0 0 16 32 z"></path>
      </svg>
    </IconButton>
  )
}

export default ColorModeButton
