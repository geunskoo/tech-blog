import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Category from "../components/Category"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          게시물이 없습니다.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title
          const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)
          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url" style={{ textDecoration: "none", color: "inherit" }}>
                <article className="post-list-item"
                          itemScope
                          itemType="http://schema.org/Article" >
                    <div>
                      <GatsbyImage image={thumbnail}
                                    alt="thumbnail"
                                    style={{borderRadius: "10px",
                                            border: "1px solid #ddd",
                                            marginBottom: "0px",
                                            width: "130px",
                                            height: "130px",
                                    }}/>
                    </div>                                  
                    <div>
                      <header>
                        <h2>
                          <span itemProp="headline">{title}</span>
                        </h2>
                      </header>
                      <section>
                        <p dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description" />
                      </section>
                      <section>
                        <Category categorys = {post.frontmatter.category} />
                      </section>
                      <small style={{color: "gray"}}>{post.frontmatter.date}</small>
                    </div>
                  </article>
                </Link>
              </li>
              )
          })}
        </ol>
      </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY, MM/DD")
          title
          description
          category
          thumbnail{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
