import dankMonoWoff2 from "../../assets/fonts/dank-mono.woff2"
import dankMonoItalicWoff2 from "../../assets/fonts/dank-mono-italic.woff2"
import { FONTS } from "../../utils/constants"
const { code: codeFontFamily } = FONTS

const dankMonoFontFace = `
  @font-face {
    font-family: '${codeFontFamily}';
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    src: url(${dankMonoWoff2}) format('woff2-variations'),
      url(${dankMonoWoff2}) format('woff2');
  }
`

const dankMonoItalicFontFace = `
  @font-face {
    font-family: '${codeFontFamily}';
    font-weight: 400;
    font-display: swap;
    font-style: italic;
    src: url(${dankMonoItalicWoff2}) format('woff2-variations'),
      url(${dankMonoItalicWoff2}) format('woff2');
  }
`

const dankMonoFontFaces = dankMonoFontFace + dankMonoItalicFontFace

export default dankMonoFontFaces
