/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

const WebmentionTypeCount = ({ count, singular, plural }) => (
  <Flex
    sx={{
      flex: 1,
      justifyContent: `center`,
    }}
  >
    {count} {count === 1 ? singular : plural}
  </Flex>
)

export default WebmentionTypeCount
