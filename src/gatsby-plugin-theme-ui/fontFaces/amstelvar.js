import amstelvarItalicWoff2 from "../../assets/fonts/amstelvar-italic.woff2"
import { FONTS } from "../../utils/constants"

const { heading } = FONTS

const amstelvarFontFace = {
  "@font-face": {
    fontFamily: heading,
    fontWeight: `100 900`,
    fontDisplay: `swap`,
    fontStyle: `italic`,
    src: `url(${amstelvarItalicWoff2}) format("woff2-variations"),
      url(${amstelvarItalicWoff2}) format("woff2")`,
  },
}

export default amstelvarFontFace
