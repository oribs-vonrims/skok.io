/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { Fragment, useState, useEffect, useRef } from "react"
import { isSafari } from "react-device-detect"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import isBrowser from "../../utils/is-browser"
import {
  COLOR_MODE_EVENT_NAME,
  COLOR_MODE_STORAGE_KEY,
  FAVICON_LINK_ELEMENT_ID,
  FAVICON_CANVAS_DATA_ATTRIBUTE,
} from "../../utils/constants"
import Canvas from "./canvas"

const Favicon = () => {
  const { favicons } = useSiteMetadata()
  const [href, setHref] = useState(() => getColorModeFavicon(favicons))
  const canvasRef = useRef(null)
  const { theme } = useThemeUI()
  const color = getColor(theme, `primary`)

  useEffect(() => {
    // Remove all favicons set by `gatsby-plugin-manifest`
    Array.from(document.querySelectorAll(`link[rel="icon"]`))
      .filter(link => link.id !== FAVICON_LINK_ELEMENT_ID)
      .forEach(link => link.remove())

    const observer = new MutationObserver(() => {
      const href = canvasRef.current.getAttribute(FAVICON_CANVAS_DATA_ATTRIBUTE)
      setHref(href)
    })

    const handleVisibilityChange = () => {
      if (document.visibilityState === `hidden`) {
        observer.observe(canvasRef.current, { attributes: true })
      }

      if (document.visibilityState === `visible`) {
        observer.disconnect()
        const href = getColorModeFavicon(favicons)
        setHref(href)
      }
    }

    const handlerColorModeChange = ({ colorMode }) =>
      setHref(favicons[colorMode])

    // Capture custom event emited by ColorModeButton component
    window.addEventListener(COLOR_MODE_EVENT_NAME, handlerColorModeChange)
    document.addEventListener(`visibilitychange`, handleVisibilityChange)

    return () => {
      document.removeEventListener(`visibilitychange`, handleVisibilityChange)
      window.removeEventListener(COLOR_MODE_EVENT_NAME, handlerColorModeChange)
    }
  }, [favicons])

  return (
    <Fragment>
      <Canvas ref={canvasRef} />
      <Helmet>
        <link
          rel={isSafari ? `mask-icon` : `icon`}
          id={FAVICON_LINK_ELEMENT_ID}
          href={href}
          {...(isSafari && { color })}
        />
      </Helmet>
    </Fragment>
  )
}

const getColorModeFavicon = favicons => {
  const colorMode =
    isBrowser() && window.localStorage.getItem(COLOR_MODE_STORAGE_KEY)
  return favicons[colorMode] || favicons.default
}

export default Favicon
