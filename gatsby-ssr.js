/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react");

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });

  const criticalCss = `
    .blog-post-wrapper {
        width: 100% ;
    }
    .blog-head-wrapper {
        position: relative ;
        margin: 0 0 2rem 0 ;
    }
    .blog-post header h1 {
        color: var(--color-white) ;
        font-size: var(--fontSize-8) ;
        margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0) ;
    }
    .blog-post-article-image{
        border-radius: var(--radius-0) ;
        margin-bottom: 0rem ;
        width: 100% ;
        height: 60vh ;
        filter: brightness(50%) ;
        object-fit: cover ; 
        object-position: center ;
    }
    .toc{
      max-height: 400px ;
      overflow: auto ;      
      border: calc(1.5 * var(--spacing-px)) dashed var(--color-deep-gray) ;
      font-size: var(--fontSize-0) ;
      border-radius: var(--radius-0) ;
      margin: 0 0 4rem 0 ;
      padding: 1.5rem 1rem 1rem 1.5rem ;
  
      a {
          text-decoration: none ;
      }
      li {
          list-style-type: none ;
          margin: 0 0 0.4rem 0 ;
      }
      ul {
          margin: 0 0 0 1rem ;   
      }
      p {
          margin: 0 0 0 0 ;
      }
      transition: opacity 0.5s ease-in-out ;
    }
  .blog-post-nav {
    width: 48%
  }
  .prev-article-title{
    display: flex;
    margin-bottom: 0.5rem;
  }
  .next-article-title{
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 0.5rem;
  }  
  .light-post-wrapper {
    width: 100%;
    transition: transform 0.5s ease;
    border-radius: 1.25rem; 
  }  
  .light-post-wrapper:hover {
    transform: scale(1.05);
    border-radius: 1.25rem; 
  }
  
  .light-post-link-container {
    text-decoration: none;
    color: inherit
  }
  
  .light-post-article {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: var(--border-light);
    border-radius: var(--radius-1); 
    box-shadow: 0 4px 8px var(--color-gray);
  }
  
  .light-post-article-thumbnail{
    width: 120px;
  }
  
  .light-post-article-content {
    padding: 1rem;
    margin: 0 0 0 0;
  }
  
  /* 포스트 카드 제목 */
  .light-post-article-content h3{
    margin: 0 0 0.5rem 0;
  }
  /* 포스트 카드 요약 */
  .light-post-article-content p{
    font-size: var(--fontSize-0);
    margin: 0 0 0.5rem 0;
  }
  
  .light-post-article-footer{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  
  .light-post-article-date{
    font-size: var(--fontSize-0);
    color: var(--color-deep-gray);
  
    margin: 0 1rem 0 0;
  }
  
  .light-post-article-view{
    color: var(--color-deep-gray);
    font-size: var(--fontSize-0);
  }
  
  @media (max-width: 520px){
  
    .light-post-article {
      height: 100px;
    }
    
    .light-post-article-thumbnail{
      width: 100px;
    }
  
    .light-post-article-content > section {
      display: none;
    }
  }
  .minimal-project-container{
    max-width: 550px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    
  `;

  setHeadComponents([
    <style key="critical-css" dangerouslySetInnerHTML={{ __html: criticalCss }} />
  ]);
};
