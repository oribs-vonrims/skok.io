import setFavicon from "./set-favicon"

let counter = 0
let timer = null

const svg = value => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
>
  <style>
    text {
      transform: rotate(${value}deg);
      transform-origin: 50% 50%;
    }
  </style>
  <text y="80px" font-size="80px">👋</text>
</svg>
`

const setInactiveFavicon = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }

  timer = setInterval(() => {
    counter += 1
    // Set SVG rotation step to 45 degree
    setFavicon(svg(0 + 45 * (counter % 3)))
  }, 1000)
}

setInactiveFavicon.clear = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

export default setInactiveFavicon
