import React, { useState } from 'react';
import "./post-category.css";

const PostCategory = ({ posts, filterPostsByCategory, categories, selectedCategory }) => {

    const [isHidden, setIsHidden] = useState(true);

    // (모바일 전용) 카테고리 토글 숨김 여부 
    const clickCategoryToggle = () => {
      setIsHidden(!isHidden);
    }
  
    // 카테고리별 개수 맵
    const categoryCountMap = {};
    posts.forEach(post => {
      post.frontmatter.category.forEach(category => {
        categoryCountMap[category] = (categoryCountMap[category] || 0) + 1;
      })
    });

    return (
      <div>
        {/* 모바일 전용 버튼 */}
        <button className="category-mobile-button" onClick={clickCategoryToggle}>{isHidden ? '▼ 카테고리' : '▲ 오므리기'}</button>
        <div className={`category-button-container ${isHidden ? 'none' : ''}`}>
          <button className={`category-button ${selectedCategory === '전체' ? "active" : ""}`} onClick={() => filterPostsByCategory(null)}>전체 ({posts.length})</button>
          {categories.map(category => (
          <button className={`category-button ${selectedCategory === category ? "active" : ""}`} key={category} onClick={() => filterPostsByCategory(category)}>
            {category} ({categoryCountMap[category]})
          </button>
          ))}
        </div>
      </div>
    );
  };

export default PostCategory;