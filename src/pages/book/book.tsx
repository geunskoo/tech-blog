import * as React from "react";
import "./book.css";

import { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArticlePostCategory from "../../components/common-component/post-category/article-post-category.js"
import Seo from "../../components/core-component/seo.js"

const BookPage = ({ data }) => {

  const posts = data.allMarkdownRemark.nodes
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
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

  return  (
    <div className="book-wrapper">
      <div>
        <button className={`category-button ${selectedCategory === '전체' ? "active" : ""}`} onClick={() => filterPostsByCategory(null)}>전체 ({posts.length})
        </button>
        {categories.map((category: any) => (
          <button className={`category-button ${selectedCategory === category ? "active" : ""}`} key={category} onClick={() => filterPostsByCategory(category)}>
            {category} ({categoryCounts[category]}) 
          </button>
        ))}
      </div>
      <div>
        <ol className="book-wrapperrrr">
          {filteredPosts.map(post => {
            const title = post.frontmatter.title
            const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)
            return (
              <div className="book-container" >
              <li key={post.fields.slug}>
                <Link className="book-container-link" to={post.fields.slug} itemProp="url">
                  <article className="book-article" itemScope itemType="http://schema.org/Article" >                      
                    <GatsbyImage image={thumbnail} alt="thumbnail" style={{ zIndex: "1", borderRadius: "0.5rem", width: "130px", height: "195px"}}/>
                    <div style={{width: "130px"}}>
                      <header style={{display: "flex", justifyContent:"center", alignItems: "center", marginTop:"0.5rem"}}>
                        <h5 style={{marginTop: "0rem"}}><span itemProp="headline">{title}</span></h5>
                      </header>
                      <section style={{display: "flex", justifyContent:"center", alignItems: "center", marginTop:"0.2rem"}}>
                        <ArticlePostCategory categorys={post.frontmatter.category}/>
                      </section>
                    </div>
                    </article>
                  </Link>
                </li>
                </div>
                )
            })}
          </ol>
        </div>
      </div>
  )
}

export default BookPage

export const Head = () => <Seo title="Book" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "book" } } }
      ) {
      nodes {
        excerpt
        fields {
          slug
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
