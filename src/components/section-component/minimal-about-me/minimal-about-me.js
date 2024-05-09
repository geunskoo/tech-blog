import * as React from "react";
import "./minimal-about-me.css";
import { StaticImage } from "gatsby-plugin-image";

const MinimalAboutMe = () => {

  return (
    <div className="minimal-about-wrapper">
      <h1 style={{  textAlign: "center", marginBottom:"5rem", color:"white"}}>제가 가진 대표적인 <span className="gradient-subtitle">개발 역량</span> 입니다!</h1>
      <div style={{ display: "flex", flexDirection:"row", flexWrap: "wrap", gap: "150px", justifyContent:"center"}}>
        <div style={{ maxWidth: "550px", alignContent:"center", fontSize:"var(--fontSize-1-0)"}}>
          <p>Java와 Spring 프레임 워크와 객체지향적인 사고를 통해 클린코드를 작성할 수 있습니다.</p>
          <p>외부 API를 이용하여 결제시스템을 구축해본 경험이 있습니다.</p>
          <p>팀원들과 활성화된 코드리뷰 환경을 조성하여, 적극적인 코드 품질 개선 활동경험이 있습니다.</p>
          <p>MSA 프로젝트를 진행하며 클라우드 서비스 환경을 구성해본 경험이 있습니다.</p>
        </div>
        <StaticImage  alt="Profile picture" src="../../../images/geun4.png" layout="constrained" width={300} height={300} quality={100} style={{borderRadius: "0.8rem"}}/>
      </div>
    </div>
  )
}

export default MinimalAboutMe