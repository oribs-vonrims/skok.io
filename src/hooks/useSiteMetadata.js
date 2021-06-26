import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            firstName
            lastName
            siteUrl
            siteName
            language
            speakableSelector
            logo {
              url
              width
              height
            }
            copyrightYear
            address {
              addressCountry
              addressLocality
              addressRegion
            }
            socialMedia {
              twitter
              github
            }
            pages {
              home {
                id
                pathName
                title
                description
                image
                imageAlt
                breadcrumb
                type
              }
              blog {
                id
                pathName
                title
                description
                image
                imageAlt
                breadcrumb
                type
              }
              post {
                id
                type
                breadcrumb
              }
            }
            colorModes
            favicons {
              light
              dark
            }
            components {
              codeBlock {
                isCopy
                isFocus
                isLabel
              }
              intro {
                id
              }
              tableOfContents {
                introId
                introTitle
              }
            }
          }
        }
      }
    `
  )

  return siteMetadata
}

export default useSiteMetadata
