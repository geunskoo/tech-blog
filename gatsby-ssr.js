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
        flex-direction: column;
    }
    .blog-head-wrapper {
        position: relative ;
        margin: 0 0 2rem 0 ;
    }
    .blog-head-line {
        position: absolute ;
        z-index: 1 ;
        top: 40% ;
        left: 50% ;        
        transform: translateX(-50%) ;
    }
    .blog-post header h1 {
        width: 600px ;
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
      ul {
        display: flex ;
        width: 100% ;
        flex-wrap: wrap ;
        justify-content: space-between ;
        list-style: none ;
        margin: var(--spacing-0) ;
      }
      li {
        width: 48% ;
        margin-left: 0rem ;
      }
    }
  `;

  setHeadComponents([
    <style key="critical-css" dangerouslySetInnerHTML={{ __html: criticalCss }} />
  ]);
};
