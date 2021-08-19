import React, { Fragment } from "react"
import { Themed, Box } from "theme-ui"
import Link from "../../../../src/components/Link"
import slashify from "../../../../src/utils/slashify"

const SeriesIntro = ({ part }) => (
  <Fragment>
    <Themed.p>
      This is a 4 part series about building{` `}
      <Themed.strong>SEO-optimized Gatsby blog</Themed.strong>.
    </Themed.p>
    <Themed.ol>
      <Themed.li>
        <Box
          as={Number(part) === 1 ? `span` : Link}
          to={slashify(`blog`, `gatsby-node-and-config-files`)}
        >
          gatsby-config.js and gatsby-node.js files
        </Box>
      </Themed.li>
      <Themed.li>
        <Box
          as={Number(part) === 2 ? `span` : Link}
          to={slashify(`blog`, `gatsby-graphql-fragments`)}
        >
          GraphQL Fragments
        </Box>
      </Themed.li>
      <Themed.li>
        <Box
          as={Number(part) === 3 ? `span` : Link}
          to={slashify(`blog`, `gatsby-seo-component`)}
        >
          SEO component
        </Box>
      </Themed.li>
      <Themed.li>
        <Box
          as={Number(part) === 4 ? `span` : Link}
          to={slashify(`blog`, `gatsby-sitemap-and-robots-txt-files`)}
        >
          sitemap.xml and robots.txt
        </Box>
      </Themed.li>
    </Themed.ol>

    <Themed.p>
      Throughout the series we will be using{` `}
      <Link href="https://mdxjs.com">MDX</Link> and{` `}
      <Link href="http://theme-ui.com">Theme UI</Link>. In case you are not
      familiar with these libraries, please do not worry you will still be able
      to follow along.
    </Themed.p>
  </Fragment>
)

export default SeriesIntro
