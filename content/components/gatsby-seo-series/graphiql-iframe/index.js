/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Embed, Box } from "theme-ui"
import { useBreakpointIndex } from "@theme-ui/match-media"

const GraphiQLIframe = ({
  title = `Gatsby GraphiQL playground`,
  url = `https://gatsby-seo.skok.dev/___graphql?query=`,
  query,
}) => {
  const isMobile = useBreakpointIndex() === 0

  return isMobile ? (
    <Fragment />
  ) : (
    <Box
      sx={{
        display: [`none`, `block`],
      }}
    >
      <Embed title={title} src={`${url}${query}`} loading="lazy" />
    </Box>
  )
}

export default GraphiQLIframe
