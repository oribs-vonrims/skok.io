/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core' 

const keyframes1 = {
  '0%': { clipPath: `inset(4% 0 53% 0)` },
  '5%': { clipPath: `inset(24% 0 41% 0)` },
  '10%': { clipPath: `inset(91% 0 91% 0)` },
  '15%': { clipPath: `inset(41% 0 5% 0)` },
  '20%': { clipPath: `inset(70% 0 88% 0)` },
  '25%': { clipPath: `inset(99% 0 22% 0)` },
  '30%': { clipPath: `inset(1% 0 47% 0)` },
  '35%': { clipPath: `inset(6% 0 93% 0)` },
  '40%': { clipPath: `inset(61% 0 39% 0)` },
  '45%': { clipPath: `inset(25% 0 45% 0)` },
  '50%': { clipPath: `inset(30% 0 30% 0)` },
  '55%': { clipPath: `inset(47% 0 29% 0)` },
  '60%': { clipPath: `inset(99% 0 16% 0)` },
  '65%': { clipPath: `inset(84% 0 29% 0)` },
  '70%': { clipPath: `inset(25% 0 99% 0)` },
  '75%': { clipPath: `inset(10% 0 73% 0)` },
  '80%': { clipPath: `inset(92% 0 81% 0)` },
  '85%': { clipPath: `inset(14% 0 21% 0)` },
  '90%': { clipPath: `inset(34% 0 82% 0)` },
  '95%': { clipPath: `inset(3% 0 29% 0)` },
  '100%': { clipPath: `inset(33% 0 9% 0)` },
}
const keyframes2 = {
  '0%': { clipPath: `inset(24% 0 3% 0)` },
  '5%': { clipPath: `inset(4% 0 21% 0)` },
  '10%': { clipPath: `inset(9% 0 1% 0)` },
  '15%': { clipPath: `inset(61% 0 15% 0)` },
  '20%': { clipPath: `inset(7% 0 8% 0)` },
  '25%': { clipPath: `inset(9% 0 2% 0)` },
  '30%': { clipPath: `inset(15% 0 17% 0)` },
  '35%': { clipPath: `inset(56% 0 23% 0)` },
  '40%': { clipPath: `inset(11% 0 29% 0)` },
  '45%': { clipPath: `inset(15% 0 4% 0)` },
  '50%': { clipPath: `inset(3% 0 3% 0)` },
  '55%': { clipPath: `inset(7% 0 2% 0)` },
  '60%': { clipPath: `inset(99% 0 1% 0)` },
  '65%': { clipPath: `inset(14% 0 49% 0)` },
  '70%': { clipPath: `inset(25% 0 49% 0)` },
  '75%': { clipPath: `inset(10% 0 73% 0)` },
  '80%': { clipPath: `inset(22% 0 11% 0)` },
  '85%': { clipPath: `inset(14% 0 21% 0)` },
  '90%': { clipPath: `inset(34% 0 22% 0)` },
  '95%': { clipPath: `inset(3% 0 29% 0)` },
  '100%': { clipPath: `inset(23% 0 9% 0)` },
}

// const rand = () => Math.floor(Math.random() * 100) + 1 + '%'
// const clipPath = () => `inset(${rand()} 0 ${rand()} 0)`
// const keys = Array.from({ length: 20 }).map((_, i) => i * 5 + '%')

// for (let i = 0; i < keys.length; i++) {
//   keyframes1[keys[i]] = { clip: clipPath() }
//   keyframes2[keys[i]] = { clip: clipPath() }
// }

const glitch1 = keyframes(keyframes1)
const glitch2 = keyframes(keyframes2)

// console.log('keys', keys)
// console.log('keyframes1', keyframes1)
// console.log('keyframes2', keyframes2)
// console.log('glitch1', glitch1)
// console.log('glitch2', glitch2)

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
        animationDuration: `3000ms`,
        animationIterationCount: `infinite`,
      },
      '&::after': {
        left: `-2px`,
        textShadow: `-1px 0 blue`,
        backgroundColor: `background`,
        animationName: glitch2.toString(),
        animationTimingFunction: `linear`,
        animationDuration: `3000ms`,
        animationIterationCount: `infinite`,
      }
    }}>
      { children }
    </span>
  )
}

export default GlitchText