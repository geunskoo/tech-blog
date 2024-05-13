import * as React from "react";
import "./minimal-about-me.css";
import { StaticImage } from "gatsby-plugin-image";

const MinimalAboutMe = () => {

  return (
    <div className="minimal-about-wrapper">
      <h1 className="minimal-about-title">제가 가진 대표적인 <span className="gradient-subtitle">개발 역량</span> 입니다!</h1>
      <div className="minimal-about-container">
        <div className="minimal-about-content">
          <p>˙ Java, Spring Boot프레임 워크를 사용하여 유지보수에 용이한 객체지향적인 코드를 잘 작성할 수 있습니다.</p>
          <p>˙ Java8, Stream API를 활용하여 복잡한 데이터처리를 간결하고 직관적으로 작성할 수 있습니다.</p>
          <p>˙ 외부API를 활용하여 빌링서비스를 구축해본 경험이 있습니다.</p>
          <p>˙ MSA 프로젝트를 진행하며 클라우드 서비스 환경을 구성해본 경험이 있습니다.</p>
          <p>˙ 팀원들과 활성화된 코드리뷰 환경을 조성하여, 적극적인 코드 품질 개선 활동경험이 있습니다.</p>
        </div>
        <StaticImage alt="Profile picture" src="../../../images/geun4.png" layout="constrained" width={300} height={300} quality={100} style={{boxShadow: "0 0 15px 0 #bee8f8",borderRadius: "0.8rem"}}/>
      </div>
    </div>
  )
}

export default MinimalAboutMe