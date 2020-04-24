import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            navigation {
              label
              to
            }
            codeBlock {
              lineNumbers
              lineNumbersButton
              themeToggleButton
              copyButton
              languageTab
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata