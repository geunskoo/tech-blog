import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Category from "../components/Category"
import Seo from "../components/seo"

const BlogPage = ({ data, location }) => {

  const posts = data.allMarkdownRemark.nodes
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isHidden, setIsHidden] = useState(true);

  const categories = Array.from(new Set(posts.flatMap(post => post.frontmatter.category)));
  const filterPostsByCategory = (category) => {
    if (category) {
      const filtered = posts.filter(post => post.frontmatter.category.includes(category));
      setFilteredPosts(filtered);
      setSelectedCategory(category);
    } else {
      setFilteredPosts(posts);
      setSelectedCategory('전체');
    }
  };

  const categoryCounts = {};
  posts.forEach(post => {
    post.frontmatter.category.forEach(category => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    })
  });

  const lastPost = posts[0];

  const clickCategoryToggle = () => {
    setIsHidden(!isHidden);
  }

  return (
    <Layout location={location}>
      <div>
        <div>
          <button className="category-mobile-button" onClick={clickCategoryToggle}>{isHidden ? '▼ 카테고리' : '▲ 오므리기'}</button>
        </div>
        <div className={`category-button-container ${isHidden ? 'none': ''}`}>
          <button className={`category-button ${selectedCategory === '전체' ? "active" : ""}`} onClick={() => filterPostsByCategory(null)}>전체 ({posts.length})</button>
          {categories.map(category => (
            <button className={`category-button ${selectedCategory === category ? "active" : ""}`} key={category} onClick={() => filterPostsByCategory(category)}>
              {category} ({categoryCounts[category]}) 
            </button>
          ))}
        </div>
      </div>
      <div className="post-wrapper">
        <ol>
          {filteredPosts.map(post => {
            const title = post.frontmatter.title
            const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)
            return (
              <div className="post-container" >
              { lastPost === post && (
              <div className="post-new-tag">
                <StaticImage style={{zIndex: "2", marginBottom: "-5.25rem", marginLeft: "-0.25rem", width: "60px", height: "60px"}} src="../images/newtag.png" alt="newtag" layout="fixed" formats={["auto", "webp", "avif"]}/>
              </div>
              )}
              <li style={{marginLeft: "0rem"}} key={post.fields.slug}>
                <Link className="post-container-link" to={post.fields.slug} itemProp="url">
                  <article className="post-article" itemScope itemType="http://schema.org/Article" >                      
                    <GatsbyImage image={thumbnail} alt="thumbnail" style={{ zIndex: "1", borderRadius: "1.25rem", border: "1px solid #ddd", marginBottom: "0px", marginRight: "1.5rem", width: "130px", height: "130px", minWidth:"130px"}}/>
                    <style>{`@media (max-width: 520px) {.post-article .gatsby-image-wrapper {width: 100px !important; min-width: 100px !important; height: 100px !important; margin-right: 0.5rem !important;}}`}</style>
                    <div style={{marginLeft: "0rem"}}>
                      <header>
                        <h2><span itemProp="headline">{title}</span></h2>
                      </header>
                      <section>
                        <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt}} itemProp="description" />
                      </section>
                      <section>
                        <Category categorys={post.frontmatter.category}/>
                      </section>
                      <div className="post-article-footer">
                        <div className="post-article-date">{post.frontmatter.date}</div>
                        <StaticImage style={{ marginBottom:"0.15rem", marginRight: "0.2rem",width: "15px", height: "15px"}} src="../images/grayView.png" alt="view" formats={["auto", "webp", "avif"]}/>
                        <style>{`@media (max-width: 520px) {.post-article-footer .gatsby-image-wrapper {width: 15px !important; min-width: 15px !important; height: 15px !important; margin-right: 0.2rem !important; margin-bottom: 0.15rem !important;}}`}</style>
                        <div className="post-article-view">{post.fields.viewCount}</div>
                      </div>
                    </div>
                    </article>
                  </Link>
                </li>
                </div>
                )
            })}
          </ol>
        </div>
      </Layout>
  )
}
export default BlogPage

export const Head = () => <Seo title="Blog" />


export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
      nodes {
        excerpt
        fields {
          slug
          viewCount
        }
        frontmatter {
          date(formatString: "YYYY, MM/DD")
          title
          type
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
