/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useKey } from "react-use"
import { ScrollProvider } from "../../components/ScrollProvider"
import {
  NotationProvider,
  notationRef,
} from "../../components/NotationProvider"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import useScrollBehavior from "../../hooks/useScrollBehavior"
import Layout from "../../components/Layout"
import PostCover from "../../components/PostCover"
import PostMeta from "../../components/PostMeta"
import Pagination from "../../components/Pagination"
import scrollCodeBlock from "../../components/CodeBlock/scroller"
import ScrollProgress from "../../components/ScrollProgress"

const Post = ({ pageContext, data }) => {
  useScrollBehavior()
  useKey(`ArrowLeft`, event => scrollCodeBlock(event, `left`))
  useKey(`ArrowRight`, event => scrollCodeBlock(event, `right`))

  const {
    pages: {
      post: { type, breadcrumb },
    },
  } = useSiteMetadata()

  const {
    prev,
    next,
    slug,
    toc: { ids: headerIds, items: tocItems },
  } = pageContext

  const {
    mdx: {
      body,
      frontmatter: { title, description, date, modifiedDate, cover, coverAlt },
    },
  } = data

  return (
    <NotationProvider>
      <ScrollProvider>
        <ScrollProgress />
        <Layout
          type={type}
          slug={slug}
          title={title}
          date={date}
          modifiedDate={modifiedDate}
          cover={cover?.childImageSharp?.fluid?.src}
          covers={{ ...cover?.childImageSharp }}
          coverAlt={coverAlt}
          description={description}
          breadcrumb={breadcrumb}
          pageName="post"
        >
          {cover && coverAlt && <PostCover src={cover} alt={coverAlt} />}
          <div data-speakable="true" ref={notationRef}>
            <Themed.h1>{title}</Themed.h1>
            <PostMeta slug={slug} date={date} />
            <MDXRenderer tocItems={tocItems} headerIds={headerIds}>
              {body}
            </MDXRenderer>
          </div>
          {(prev?.fields?.slug || next?.fields?.slug) && (
            <Pagination
              previous={prev?.fields?.slug}
              next={next?.fields?.slug}
            />
          )}
        </Layout>
      </ScrollProvider>
    </NotationProvider>
  )
}

export default Post

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        ...FrontmatterFields
        cover {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
            ...ChildImageSharpFields
          }
        }
      }
    }
  }
`
