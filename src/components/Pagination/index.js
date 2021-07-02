/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Link from "./link"

const Pagination = ({ previous, next }) => (
  <Flex
    sx={{
      marginX: [-3, 0],
      marginBottom: 4,
      columnGap: [0, 4],
      rowGap: [2, 0],
      flexDirection: [`column`, `row`],
      textAlign: `left`,
    }}
  >
    {previous && (
      <Link url={previous.url} title={previous.title} text="Previous" />
    )}
    {next && <Link url={next.url} title={next.title} text="Next" />}
  </Flex>
)

export default Pagination
