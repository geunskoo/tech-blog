import * as React from "react";
import "./minimal-about-me2.css";
import { StaticImage } from "gatsby-plugin-image";

const MinimalAboutMe2 = () => {

  return (
    <div className="minimal-about2-wrapper">
      <h1 className="minimal-about2-title">이런 <span style={{textEmphasis: "filled dot"}}>능력</span>도 있어요!</h1>
      <div className="minimal-about2-container">
        <StaticImage  alt="Profile picture" src="../../../images/horse2.png" layout="constrained" width={300} height={300} quality={100} style={{borderRadius: "0.8rem"}}/>
        <div className="minimal-about2-content">
          <p><span style={{color:"var(--color-green)"}}>"말이 잘 통하는 개발자"</span> 가 되기 위해 상대방의 의견에 귀기울이고, <br/>논리적으로 말하려 노력합니다.</p>
          <p> 외부 교육 과정(스파로스 아카데미) 중 함께 <span style={{color:"var(--color-green)"}}>협업하고 싶은 교육생 1위</span>로 선정되기도 하였습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default MinimalAboutMe2