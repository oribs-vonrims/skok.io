/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Date from "../../components/Date"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"
import WebMentions from "../../components/WebMentions"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next, permalink } = pageContext
  const { mdx } = data
  const { title, summary, date, cover, coverAlt } = mdx.frontmatter
  const { siteUrl, author } = useSiteMetadata()
  const allWebMentionEntry = data?.allWebMentionEntry

  return (
    <Layout>
      <TweetableSelection />

      <article className="h-entry">
        {cover && <Img sizes={cover.childImageSharp.sizes} alt={coverAlt} />}

        <Styled.h1 className="p-name">{title}</Styled.h1>

        <a href={siteUrl} sx={{ display: `none` }} className="p-author h-card">
          {author}
        </a>

        {date && <Date date={date} />}

        {summary && (
          <Styled.p sx={{ variant: `text.italic` }} className="p-summary">
            {summary}
          </Styled.p>
        )}

        <div className="e-content">
          {/* eslint react/no-children-prop: 0 */}
          <MDXRenderer children={mdx.body} />
        </div>
      </article>

      {allWebMentionEntry?.edges?.length > 0 && (
        <aside>
          <WebMentions allWebmentionEntry={allWebMentionEntry} />
        </aside>
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
        summary
        date
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
