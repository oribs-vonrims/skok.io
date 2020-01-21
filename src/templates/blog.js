import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Link from '../components/Link';

const Blog = ({
  data: { allMdx },
  pageContext: { pagination },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id)
  )

  return (
    <Layout>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          {post.frontmatter.cover && (
            <Img
              sizes={post.frontmatter.cover.childImageSharp.sizes}
            />
          )}

          <h2>
            <Link to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </h2>

          <small>{post.frontmatter.date}</small>

          <p>{post.excerpt}</p>

          <Link to={post.fields.slug}>
            Continue Reading
          </Link>
        </div>
      ))}

      <hr />

      <div>
        Pagination:
        <ul>
          {nextPagePath && (
            <li>
              <Link to={nextPagePath}>
                Next Page
              </Link>
            </li>
          )}

          {previousPagePath && (
            <li>
              <Link to={previousPagePath}>
                Previous Page
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                sizes(maxWidth: 900) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
