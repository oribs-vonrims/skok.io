/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"
import BlogCard from "../components/BlogCard"

const Blog = ({ data: { file, allMdx } }) => {
  const {
    pages: {
      blog: { to, title, description, coverAlt, type, breadcrumb },
    },
  } = useSiteMetadata()

  const covers = file?.childImageSharp
  const articles = allMdx.edges.map(({ node }) => node)

  return (
    <Layout
      to={to}
      title={title}
      description={description}
      covers={{ ...covers }}
      coverAlt={coverAlt}
      type={type}
      breadcrumb={breadcrumb}
      pageName="blog"
    >
      <Themed.h1>{title}</Themed.h1>

      {articles.map(({ id, ...article }) => (
        <BlogCard key={id} article={article} />
      ))}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        ...ChildImageSharpFields
      }
    }
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            ...FrontmatterFields
            cover {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
