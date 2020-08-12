/** @jsx jsx */
import { jsx } from "theme-ui"
import { ColorModeProvider } from "@theme-ui/color-modes"
import ThemeUIProvider from "../ThemeUIProvider"
import { SoundProvider } from "../SoundProvider"

export const wrapRootElement = ({ element }) => (
  <SoundProvider>
    <ThemeUIProvider element={element}>
      <ColorModeProvider />
    </ThemeUIProvider>
  </SoundProvider>
)
