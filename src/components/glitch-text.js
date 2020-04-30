/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core' 

const rand = () => Math.floor(Math.random() * 100) + 1 + '%'
const clipPath = () => `{ inset(${rand()} 0 ${rand()} 0); }`
const keys = Array.from({ length: 20 }).map((_, i) => i * 5 + '%')

const keyframes1 = keys.map(k => `${k + ' ' + clipPath() + ' '}`).join('')
const keyframes2 = keys.map(k => `${k + ' ' + clipPath() + ' '}`).join('')

const glitch1 = keyframes`${keyframes1}`
const glitch2 = keyframes`${keyframes2}`

console.log('keys', keys)
console.log('keyframes1', keyframes1)
console.log('keyframes2', keyframes2)
console.log('glitch1', glitch1)
console.log('glitch2', glitch2)

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
        left: -2,
        textShadow: `2px 0 red`,
        backgroundColor: `background`,
        animation: `${glitch1} 3s infinite linear alternate-reverse`,
      },
      '&::after': {
        left: -2,
        textShadow: `-1px 0 blue`,
        backgroundColor: `background`,
        animation: `${glitch2} 3s infinite linear alternate-reverse`
      }
    }}>
      { children }
    </span>
  )
}

export default GlitchText