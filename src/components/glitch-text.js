/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import getRandomInt from '../utils/get-random-int'

const ANIMATION_DURATION = `5000ms`
const KEYFRAMES_NUMBER = 20
const GLITCH_COLORS = [`red`, `green`, `blue`]

const randClipPath = () => getRandomInt(1, 100) + `%`

const randTextShadow = () => {
  const shadow = getRandomInt(-1, 1)
  return shadow === 0 ?
    randPosition() :
    shadow + `px`
}

const randColor = () => GLITCH_COLORS[getRandomInt(0, 2)]

const randPosition = () => {
  const pos = getRandomInt(-5, 5)
  return pos === 0 ?
    randPosition() :
    pos + `px`
}

const clipPath = () => `inset(${randClipPath()} 0 ${randClipPath()} 0)`
const textShadow = () => `${randTextShadow()} 0 ${randColor()}`

const keys = Array.from({ length: KEYFRAMES_NUMBER }).map((_, i) => i * 5 + '%')

const keyframes1 = {}
const keyframes2 = {}

keys.forEach(key => {
  keyframes1[key] = {
    clipPath: clipPath(),
    textShadow: textShadow(),
    left: randPosition(),
  }

  keyframes2[key] = {
    clipPath: clipPath(),
    textShadow: textShadow(),
    left: randPosition(),
  }
})

const glitch1 = keyframes(keyframes1)
const glitch2 = keyframes(keyframes2)

const GlitchText = ({ children, text }) => {
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
        animationName: glitch1.toString(),
        animationTimingFunction: `linear`,
        animationDuration: ANIMATION_DURATION,
        animationIterationCount: `infinite`,
      },
      '&::after': {
        left: `-2px`,
        textShadow: `-1px 0 blue`,
        backgroundColor: `background`,
        animationName: glitch2.toString(),
        animationTimingFunction: `linear`,
        animationDuration: ANIMATION_DURATION,
        animationIterationCount: `infinite`,
      }
    }}>
      { children }
    </span>
  )
}

export default GlitchText