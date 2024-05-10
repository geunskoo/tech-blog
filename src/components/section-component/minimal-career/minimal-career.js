import React from "react";
import "./minimal-career.css";

import { StaticImage } from "gatsby-plugin-image";
import Skill from "../../common-component/skill/skill";


const MinimalCareer = () => {

  const careers = [
    {
      imageName: "shinsegae",
      name: "신세계아이앤씨",
      jobDuty: "BE & FE Developer",
      startDate: "2023.07.18",
      endDate: "2024.03.31 (9M)",
      skills:["Java", "Spring", "TypeScript", "Angular", "Oracle", "IBSheet8"],
    },
  ]

  return (
    <div className="minimal-career-wrapper">
      <h1 style={{textAlign: "center", marginBottom:"3rem"}}>저의 경력은..!</h1>
      <div style={{display: "flex", justifyContent:"center"}}>
        <div>
          <div className="company-info-container">
            <StaticImage src="../../../images/shinsegae2.png" alt="profile" width={100} height={100}/>
            <div className="company-info">
              <h4 className="minimal-career-card-title">{careers[0].name}</h4>
              <p className="minimal-career-card-job-duty">{careers[0].jobDuty}</p>
              <p className="minimal-career-card-date">{careers[0].startDate} ~ {careers[0].endDate}</p>
            </div>
          </div>
          <div className="minimal-career-card-skill">
                {careers[0].skills.map((name, index) => <Skill key={index} name={name}/>)}
          </div>
          <div className="minimal-career-card-content-container">
            <div className="minimal-career-card-content">
              <p>신세계아이앤씨 안전관리시스템구축TF에서 [ 중대재해 예방 안전관리 플랫폼: 스파로스 세이프티 ] 개발에 참여하였습니다. <br/>
                화면개발 및 서버 개발을 담당하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinimalCareer
