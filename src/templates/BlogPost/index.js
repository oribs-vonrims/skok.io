/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"
import WebMentions from "../../components/WebMentions"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next, permalink } = pageContext
  const { mdx } = data
  const { title, date, cover, coverAlt } = mdx.frontmatter
  const allWebMentionEntry = data?.allWebMentionEntry

  return (
    <Layout className="h-card">
      <TweetableSelection />
      {cover && (
        <Img
          alt={coverAlt}
          className="u-photo"
          sizes={cover.childImageSharp.sizes}
          fluid={cover.childImageSharp.fluid}
        />
      )}
      <Styled.h1>{title}</Styled.h1>

      <time>{date}</time>
      {/* eslint react/no-children-prop: 0 */}
      <MDXRenderer children={mdx.body} />

      {allWebMentionEntry?.edges?.length > 0 && (
        <WebMentions allWebmentionEntry={allWebMentionEntry} />
      )}

      <Pagination previous={prev?.fields?.slug} next={next?.fields?.slug} />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($id: String!, $permalink: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        coverAlt
        cover {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allWebMentionEntry(filter: { wmTarget: { eq: $permalink } }) {
      edges {
        node {
          type
          mentionOf
          wmTarget
          wmSource
          wmProperty
          wmPrivate
          wmId
          url
          author {
            name
            type
            photo
            url
          }
        }
      }
    }
  }
`
