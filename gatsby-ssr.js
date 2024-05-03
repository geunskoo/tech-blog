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
        width: 100%;
    }
    .blog-head-wrapper {
        position: relative;
        margin: 0 0 2rem 0;
    }
    .blog-head-line {
        position: absolute;
        z-index: 1;
        top: 40%;
        left: 50%;        
        transform: translateX(-50%);
    }
    .blog-post header h1 {
        width: 600px;
        color: var(--color-white);
        font-size: var(--fontSize-8);
        margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
    }
    .blog-post-article-image{
        border-radius: var(--radius-0);
        margin-bottom: 0rem;
        width: 100%;
        height: 60vh;
        filter: brightness(50%);
        object-fit: cover; 
        object-position: center;
    }
  `;

  setHeadComponents([
    <style key="critical-css" dangerouslySetInnerHTML={{ __html: criticalCss }} />
  ]);
};
