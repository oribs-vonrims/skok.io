/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import getRandomInt from '../utils/get-random-int'

const maxClipPath = limit => 1 / (2 - (4 * (1 - limit)) ** 0.25) * 100
const randClipPath = (maxClipPath, limit) => getRandomInt(1, maxClipPath(limit)) + `%`

const randTextShadow = (minShadow, maxShadow) => {
  const shadow = getRandomInt(minShadow, maxShadow)
  return shadow === 0 ?
    randPosition() :
    shadow + `px`
}

const randColor = colors => colors[getRandomInt(0, colors.length - 1)]

const randPosition = (minPos, maxPos) => {
  const pos = getRandomInt(minPos, maxPos)
  return pos === 0 ?
    randPosition() :
    pos + `px`
}

const clipPath = (maxClipPath, limit) => `inset(${randClipPath(maxClipPath, limit)} 0 ${randClipPath(maxClipPath, limit)} 0)`
const textShadow = (minShadow, maxShadow, colors) => `${randTextShadow(minShadow, maxShadow)} 0 ${randColor(colors)}`

const keys = keyframesNum => Array.from({ length: keyframesNum + 1 }).map((_, i) => i * (100 / (keyframesNum + 1)) + '%')

const getAnimation = (
  keyframesNum,
  limit,
  minShadow,
  maxShadow,
  minPos,
  maxPos,
  colors
) => {
  const animation = {}

  const animationKeys = keys(keyframesNum)

  animationKeys.forEach(key => {
    animation[key] = {
      clipPath: clipPath(maxClipPath, limit),
      textShadow: textShadow(minShadow, maxShadow, colors),
      left: randPosition(minPos, maxPos),
    }
  })

  return keyframes(animation).toString()
}

const GlitchText = ({
  children,
  text,
  duration,
  limit,
  keyframesNum,
  shadow,
  position,
  colors
}) => {
  const glitch1 = getAnimation(
    keyframesNum,
    limit,
    shadow[0],
    shadow[1],
    position[0],
    position[1],
    colors
  )

  const glitch2 = getAnimation(
    keyframesNum,
    limit,
    shadow[0],
    shadow[1],
    position[0],
    position[1],
    colors
  )

  return (
    <span sx={{
      position: `relative`,
      display: `inline-block`,
      '&::before, &::after': {
        content: `"${text}"`,
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
      },
      '&::before': {
        left: `2px`,
        textShadow: `-1px 0 red`,
        backgroundColor: `background`,
        animationName: glitch1,
        animationTimingFunction: `linear`,
        animationDuration: duration,
        animationIterationCount: `infinite`,
      },
      '&::after': {
        left: `-2px`,
        textShadow: `-1px 0 blue`,
        backgroundColor: `background`,
        animationName: glitch2,
        animationTimingFunction: `linear`,
        animationDuration: duration,
        animationIterationCount: `infinite`,
      }
    }}>
      { children }
    </span>
  )
}

export default GlitchText