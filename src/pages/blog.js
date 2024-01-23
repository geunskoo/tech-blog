import * as React from "react"
import { useState } from 'react';
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

  return (
    <Layout location={location}>
      <div>
        <button className={`category-button ${selectedCategory === '전체' ? "active" : ""}`} onClick={() => filterPostsByCategory(null)}>전체 ({posts.length})
        </button>
        {categories.map(category => (
          <button className={`category-button ${selectedCategory === category ? "active" : ""}`} key={category} onClick={() => filterPostsByCategory(category)}>
            {category} ({categoryCounts[category]}) 
          </button>
        ))}
      </div>
      <div className="post-wrapper">
        <ol>
          {filteredPosts.map(post => {
            const title = post.frontmatter.title
            const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)
            return (
              <li className="post-container" key={post.fields.slug}>
                <Link className="post-container-link" to={post.fields.slug} itemProp="url">
                  <article className="post-article" itemScope itemType="http://schema.org/Article" >
                    { lastPost === post && (<StaticImage className="post-new-tag-image" src="../images/newtag.png" alt="newtag" width={60} height= {60} quality={100}/>)}
                    <GatsbyImage className="post-article-image" image={thumbnail} alt="thumbnail"/>
                    <div>
                      <header>
                        <h2><span itemProp="headline">{title}</span></h2>
                      </header>
                      <section>
                        <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt}} itemProp="description" />
                      </section>
                      <section>
                        <Category categorys={post.frontmatter.category}/>
                      </section>
                      <small className="post-article-date">{post.frontmatter.date}</small>
                    </div>
                    </article>
                  </Link>
                </li>
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
