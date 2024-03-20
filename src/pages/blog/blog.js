import React, { useState } from 'react';
import "./blog.css";

import { graphql } from "gatsby";

import Seo from "../../components/core-component/seo.js"
import PostCategory from '../../components/section-component/post-category/post-category';
import PostList from '../../components/section-component/post-list/post-list';

const BlogPage = ({ data }) => {

  const posts = data.allMarkdownRemark.nodes
  const categories = Array.from(new Set(posts.flatMap(post => post.frontmatter.category)));

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState('전체');


  // 카테고리 선택 이벤트
  const filterPostsByCategory = (category) => {
    if (category) {
      const filteredPosts = posts.filter(post => post.frontmatter.category.includes(category));
      setFilteredPosts(filteredPosts);
      setSelectedCategory(category);
    } else {
      setFilteredPosts(posts);
      setSelectedCategory('전체');
    }
  };

  //최신 작성 게시물
  const recentPost = posts[0];

  return (
    <div className='blog-wrapper'>
      <PostCategory posts={posts} categories={categories} selectedCategory={selectedCategory} filterPostsByCategory={filterPostsByCategory}/>
      <PostList filteredPosts={filteredPosts} recentPost={recentPost}/>
    </div>
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
