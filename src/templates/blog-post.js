import React, {useState} from "react";
import "./blog-post.css";

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/core-component/seo"
import Utterances from "../components/core-component/Utterances"
import LightPostCard from "../components/common-component/light-post-card/light-post-card";

const BlogPostTemplate = ({data: { previous, next, site, markdownRemark: post }, location,}) => {

  const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)
  return (
    <div className="blog-post-wrapper">
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <div className="blog-head-wrapper">
          <header className="blog-head-line">
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <div style={{display: "flex", alignItems:"center", justifyContent: "flex-end"}}>
              <div style={{marginRight: "1rem", color:"var(--color-white)"}}>{post.frontmatter.date}</div>
              <StaticImage style={{ marginBottom: "0.1rem", marginRight: "0.2rem",width: "15px", height: "15px"}} src="../images/white-view.png" alt="view"/>
              <div className="post-article-view" style={{color: "var(--color-white)"}}>{post.fields.viewCount}</div>        
              </div>
          </header>
          {true && 
          <section style={{display: "flex", justifyContent: "left"}}>
            <GatsbyImage className="blog-post-article-image" image={thumbnail} alt="thumbnail"/>
          </section>}

          {/* {post.frontmatter.type === 'book' && 
          <section style={{display: "flex", justifyContent: "center"}}>
            <GatsbyImage className="book-post-article-image" image={thumbnail} alt="thumbnail"/>
        </section>} */}
        </div>
        {/* <span><h3>≣ 목차</h3></span> */}
        <section className="toc" dangerouslySetInnerHTML={{ __html: post.tableOfContents }} itemProp="articleBody"/>
        <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody"/>
        <hr/>
        <Utterances repo={"geunskoo/tech-blog"}/>
        <nav className="blog-post-nav-wrapper">
          <div className="blog-post-nav">
            {previous && <span className="prev-article-title">❮ 이전 글</span>}
            {previous && <LightPostCard post={previous}/>}
          </div>
          <div className="blog-post-nav">
            {next && <span className="next-article-title">다음 글 ❯</span>}
            {next && <LightPostCard post={next}/>}
          </div>
      </nav>
      </article>
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
        type
        thumbnail{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
      tableOfContents
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY, MM/DD")
        description
        type
        thumbnail{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY, MM/DD")
        description
        type
        thumbnail{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
  }
`
