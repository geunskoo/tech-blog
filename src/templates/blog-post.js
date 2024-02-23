import * as React from "react";
import "./blog-post.css";

import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/core-component/seo"
import Utterances from "../components/core-component/Utterances"

const BlogPostTemplate = ({data: { previous, next, site, markdownRemark: post }, location,}) => {
  const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)
  return (
    <div>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div style={{display: "flex", alignItems:"center", justifyContent: "flex-end"}}>
            <div style={{marginRight: "2rem"}}>{post.frontmatter.date}</div>
            <StaticImage style={{ marginBottom: "0.1rem", marginRight: "0.2rem",width: "15px", height: "15px"}} src="../images/grayView.png" alt="view" formats={["auto", "webp", "avif"]}/>
            <div className="post-article-view">{post.fields.viewCount}</div>
          </div>
        </header>
        <section style={{display: "flex", justifyContent: "left"}}>
          <GatsbyImage className="blog-post-article-image" image={thumbnail} alt="thumbnail"/>
        </section>
        <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody"/>
        <hr/>
        <Utterances/>
        <footer>
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields{
        viewCount
      }
      frontmatter {
        title
        date(formatString: "YYYY, MM/DD")
        description
        thumbnail{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
