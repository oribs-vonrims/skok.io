/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { useBreakpointIndex } from "@theme-ui/match-media"
import Link from "../Link"

const Pagination = ({ previous, next }) => {
  const breakpointIndex = useBreakpointIndex()
  const isMobile = breakpointIndex === 0

  return (
    <Flex sx={{ marginBottom: 4 }}>
      {previous && (
        <Link to={previous.url}>
          {isMobile ? `Previous Post` : previous.title}
        </Link>
      )}
      <Box sx={{ marginX: `auto` }} />
      {next && <Link to={next.url}>{isMobile ? `Next Post` : next.title}</Link>}
    </Flex>
  )
}

export default Pagination
