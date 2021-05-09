import amstelvarItalicWoff2 from "../../assets/fonts/amstelvar-italic.woff2"
import { FONTS } from "../../utils/constants"
const { heading: headingFontFamily } = FONTS

const amstelvarFontFace = `
  @font-face {
    font-family: '${headingFontFamily}';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    src: url(${amstelvarItalicWoff2}) format('woff2-variations'),
      url(${amstelvarItalicWoff2}) format('woff2');
  }
`

export default amstelvarFontFace
