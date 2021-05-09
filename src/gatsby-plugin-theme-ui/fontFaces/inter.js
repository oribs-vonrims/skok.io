import interWoff2 from "../../assets/fonts/inter.woff2"
import { FONTS } from "../../utils/constants"

const { body } = FONTS

const interFontFace = {
  "@font-face": {
    fontFamily: body,
    fontWeight: `100 900`,
    fontDisplay: `swap`,
    fontStyle: `oblique 0deg 10deg`,
    src: `url(${interWoff2}) format("woff2-variations"),
      url(${interWoff2}) format("woff2")`,
  },
}

export default interFontFace
