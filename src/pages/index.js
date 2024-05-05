import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Seo from "../components/core-component/seo";
import "./index.css"; // CSS 파일 경로 확인

const BlogIndex = () => {
  return (
    <div>
      <div className="flex-row">
        <Link to="/bio" className="image-container"> {/* Bio 페이지로의 링크 */}
          <StaticImage src="../images/geun4.png" alt="Description of the image" layout="constrained" width={650} height={650}/>
          <div className="image-text always-show main-image-text">Bio</div>
          <div className="image-text hover-show">이 사람 정체가 뭘까? 궁금하면 클릭!</div>
        </Link>
        <div className="column-container">
          <Link to="/blog" className="image-container"> {/* 블로그 페이지로의 링크 */}
            <StaticImage src="../images/mac.png" alt="Description of the image" layout="constrained" width={320} height={320}/>
            <div className="image-text always-show">Dev Blog</div>
            <div className="image-text hover-show">기술 블로그로 이동</div>
          </Link>
          <Link to="/book" className="image-container"> {/* 독서록 페이지로의 링크 */}
            <StaticImage src="../images/book3.png" alt="Description of the image" layout="constrained" width={320} height={320}/>
            <div className="image-text always-show">Book Review</div>
            <div className="image-text hover-show">독서록으로 이동</div>
          </Link>
        </div>
      </div>
      <div className="flex-row">
        <div className="image-container">
          <StaticImage src="../images/me.png" alt="Description of the image" layout="constrained" width={320} height={320}/>
          <div className="image-text always-show">안녕~</div>
          <div className="image-text hover-show">제주도 또 놀러가고 싶다 😎</div>
        </div>
        <div className="image-container">
          <StaticImage src="../images/sea.png" alt="Description of the image" layout="constrained" width={650} height={320}/>
          <div className="image-text always-show">하세요~</div>
          <div className="image-text hover-show">부산사람 특: 광안대교 사진 꼭 어디 올려야함</div>
        </div>
      </div>
    </div>
  );
}

export default BlogIndex;

export const Head = () => <Seo title="태근 후 글쓰기" />;
