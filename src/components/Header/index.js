/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import ColorModeButton from "../ColorModeButton"
import TwitterIconLink from "../TwitterIconLink"
import GithubIconLink from "../GithubIconLink"

const Header = () => {
  const { navigation } = useSiteMetadata()

  return (
    <Flex
      as="header"
      sx={{
        display: `flex`,
        alignItems: `center`,
        paddingY: 1,
      }}
    >
      <Link
        to={`/`}
        sx={{
          variant: `links.nav`,
          margin: 0,
        }}
      >
        VS
      </Link>
      <Box marginLeft="auto">
        <ul
          sx={{
            padding: 0,
            margin: 0,
            listStyle: `none`,
          }}
        >
          {navigation.map(({ to, label }) => (
            <li
              key={label}
              sx={{
                display: `inline-block`,
              }}
            >
              <Link
                to={to}
                sx={{
                  variant: `links.nav`,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <div className="h-card">
        <ul
          sx={{
            padding: 0,
            margin: 0,
            listStyle: `none`,
            display: `flex`,
          }}
        >
          <li>
            <TwitterIconLink />
          </li>
          <li>
            <GithubIconLink />
          </li>
          <li>
            <ColorModeButton />
          </li>
        </ul>
        <div sx={{ visibility: `hidden` }}>
          <span className="p-name">Vladimir Skok</span>
          <span className="p-note">Software Engineer</span>
          <a href="https://skok.club" className="u-url" rel="me">
            skok.club
          </a>
        </div>
      </div>
    </Flex>
  )
}

export default Header
