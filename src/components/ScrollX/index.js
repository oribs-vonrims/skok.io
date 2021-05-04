/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

const ScrollX = ({ children }) => (
  <Flex
    sx={{
      overflowX: `auto`,
      scrollMarginTop: theme => theme.space[3],
    }}
  >
    {children}
  </Flex>
)

export default ScrollX
