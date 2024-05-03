import React from 'react';
import "./light-post-card.css";

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const LightPostCard = ({ post }) => {
  const title = post.frontmatter.title;
  const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

  const thumbnailStyle = {
    zIndex: "1",
    borderRadius: "1rem",
    border: "1px solid #ddd",
    marginBottom: "0px",
    marginRight: "1.5rem",
    width: "120px",
    height: "120px"
  }
  const thumbnailMobileStyle = `@media (max-width: 520px) {.post-article .gatsby-image-wrapper {width: 100px !important; min-width: 100px !important; height: 100px !important; margin-right: 0.5rem !important;}}`

  return (
    <div className="light-post-wrapper">
        <Link className="light-post-link-container" to={post.fields.slug} itemProp="url">
          <article className="light-post-article" itemScope itemType="http://schema.org/Article">
            {/* 썸네일 */}
            <div className='light-post-article-thumbnail'>
              <GatsbyImage image={thumbnail} alt="thumbnail" style={thumbnailStyle} />
              <style>{thumbnailMobileStyle}</style>
            </div>
            {/* 내용 */}
            <div className="light-post-article-content">
              <header>
                <h5><span itemProp="headline">{title}</span></h5>
              </header>
              <section>
                <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt }} itemProp="description"/>
              </section>
            </div>
          </article>
        </Link>
    </div>
  );
};

export default LightPostCard;
