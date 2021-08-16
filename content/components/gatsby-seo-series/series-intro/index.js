import React, { Fragment } from "react"
import { Themed, Box } from "theme-ui"
import Link from "../../../../src/components/Link"
import slashify from "../../../../src/utils/slashify"

const SeriesIntro = ({ part }) => (
  <Fragment>
    <Themed.p>
      This is post {part} of a 4 part series about building SEO-optimized Gatsby
      blog with <Link href="https://mdxjs.com">MDX</Link>.
    </Themed.p>
    <Themed.ul>
      <Themed.li>
        Part 1:{` `}
        <Box
          as={Number(part) === 1 ? `span` : Link}
          to={slashify(`blog`, `gatsby-node-and-config-files`)}
        >
          gatsby-config.js and gatsby-node.js files
        </Box>
      </Themed.li>
      <Themed.li>
        Part 2:{` `}
        <Box
          as={Number(part) === 2 ? `span` : Link}
          to={slashify(`blog`, `gatsby-graphql-fragments`)}
        >
          GraphQL Fragments
        </Box>
      </Themed.li>
      <Themed.li>
        Part 3:{` `}
        <Box
          as={Number(part) === 3 ? `span` : Link}
          to={slashify(`blog`, `gatsby-seo-component`)}
        >
          SEO component
        </Box>
      </Themed.li>
      <Themed.li>
        Part 4:{` `}
        <Box
          as={Number(part) === 4 ? `span` : Link}
          to={slashify(`blog`, `gatsby-sitemap-and-robots-txt-files`)}
        >
          sitemap.xml and robots.txt
        </Box>
      </Themed.li>
    </Themed.ul>
  </Fragment>
)

export default SeriesIntro
