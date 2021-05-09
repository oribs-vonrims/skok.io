import interWoff2 from "../../assets/fonts/inter.woff2"
import { FONTS } from "../../utils/constants"
const { body: bodyFontFamily } = FONTS

const interFontFace = `
  @font-face {
    font-family: '${bodyFontFamily}';
    font-weight: 100 900;
    font-display: swap;
    font-style: oblique 0deg 10deg;
    src: url(${interWoff2}) format('woff2-variations'),
      url(${interWoff2}) format('woff2');
  }
`

export default interFontFace
