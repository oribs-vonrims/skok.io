/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, forwardRef } from "react"
import { useEnsuredForwardedRef } from "react-use"
import {
  CANVAS_SIZE,
  CANVAS_TIMEOUT_DELAY,
  CANVAS_TIME_STEP,
  FAVICON_CANVAS_DATA_ATTRIBUTE,
} from "../../utils/constants"

const Canvas = forwardRef((props, ref) => {
  const ensuredForwardedRef = useEnsuredForwardedRef(ref)

  useEffect(() => {
    const canvas = ensuredForwardedRef.current
    let time = 0

    const setIntervalId = setInterval(() => {
      draw(canvas, time)
      time += CANVAS_TIME_STEP
    }, CANVAS_TIMEOUT_DELAY)

    return () => clearInterval(setIntervalId)
  }, [ensuredForwardedRef])

  return (
    <canvas
      ref={ensuredForwardedRef}
      hidden={true}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      sx={{
        border: `1px solid #000`,
        // width: `${CANVAS_SIZE / 10}px`,
        // height: `${CANVAS_SIZE / 10}px`,
        width: `faviconCanvas`,
        height: `faviconCanvas`,
      }}
      {...props}
    />
  )
})

const draw = (canvas, time) => {
  const context = canvas.getContext(`2d`)
  const rotation = (Math.PI / 8) * Math.sin(time * 2 * Math.PI) + Math.PI / 4

  context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
  context.setTransform(1, 0, 0, 1, 0, 0)
  context.translate(CANVAS_SIZE / 2, CANVAS_SIZE / 2)
  context.rotate(rotation)
  context.translate(-CANVAS_SIZE / 2, -CANVAS_SIZE / 2)
  context.font = `480px Arial`
  context.textBaseline = `middle`
  context.textAlign = `center`
  context.fillText(`👋`, CANVAS_SIZE / 2, CANVAS_SIZE / 2)

  const dataURL = canvas.toDataURL(`image/svg+xml`)
  canvas.setAttribute(FAVICON_CANVAS_DATA_ATTRIBUTE, dataURL)
}

export default Canvas
