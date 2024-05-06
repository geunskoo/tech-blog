import React from 'react';
import "./post-card.css";

import { Link } from 'gatsby';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import ArticlePostCategory from '../post-category/article-post-category';

const PostCard = ({ post, lastPost }) => {
  const title = post.frontmatter.title;
  const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);


  /* Static Image는 .css파일 관리가 안되어서 변수로 추출 */
  const newTagSrc = "../../../images/newtag.png";
  const newTagStyle = {
    zIndex: 2,
    marginBottom: '-5.25rem',
    marginLeft: '-0.25rem',
    width: '60px',
    height: '60px',
  };

  const thumbnailStyle = {
    zIndex: "1",
    borderRadius: "1rem",
    border: "1px solid #ddd",
    marginBottom: "0px",
    marginRight: "1.5rem",
    width: "162px",
    height: "162px"
  }
  const thumbnailMobileStyle = `@media (max-width: 520px) {.post-article .gatsby-image-wrapper {width: 100px !important; min-width: 100px !important; height: 100px !important; margin-right: 0.5rem !important;}}`

  const grayViewSrc = "../../../images/grayView.png";
  const grayViewStyle = {
    marginBottom: "0.15rem",
    marginRight: "0.2rem",
    width: "15px",
    height: "15px"
  }
  const grayViewMobileStyle = `@media (max-width: 520px) {.post-article-footer .gatsby-image-wrapper {width: 15px !important; min-width: 15px !important; height: 15px !important; margin-right: 0.2rem !important; margin-bottom: 0.15rem !important;}}`

  return (
    <div className="post-wrapper">
      {lastPost && (<StaticImage style={newTagStyle} src={newTagSrc} alt="newtag" layout="fixed"/>)}
      <li key={post.fields.slug}>
        <Link className="post-link-container" to={post.fields.slug} itemProp="url">
          <article className="post-article" itemScope itemType="http://schema.org/Article">
            {/* 썸네일 */}
            <div className='post-article-thumbnail'>
              <GatsbyImage image={thumbnail} alt="thumbnail" style={thumbnailStyle} />
              <style>{thumbnailMobileStyle}</style>
            </div>
            {/* 내용 */}
            <div className="post-article-content">
              <header>
                <h3><span itemProp="headline">{title}</span></h3>
              </header>
              <section>
                <p style={{fontFamily: "var(--fontFamily-arial)"}} dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt }} itemProp="description"/>
              </section>
              <section>
                <ArticlePostCategory categorys={post.frontmatter.category} />
              </section>
              <div className="post-article-footer">
                <div className="post-article-date">{post.frontmatter.date}</div>
                <StaticImage style={grayViewStyle} src={grayViewSrc} alt="view"/>
                <style>{grayViewMobileStyle}</style>
                <div className="post-article-view">{post.fields.viewCount}</div>
              </div>
            </div>
          </article>
        </Link>
      </li>
    </div>
  );
};

export default PostCard;
