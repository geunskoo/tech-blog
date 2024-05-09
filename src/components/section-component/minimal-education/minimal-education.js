import * as React from "react";
import "./minimal-education.css";

import HistCard from "../../common-component/hist-card/hist-card";

const MinimalEducation = () => {
  

  return (
    <div className="minimal-education-wrapper">
      <h1 style={{  textAlign: "center", marginBottom:"5rem"}}>배움의 과정</h1>

      {/* 학교 */}
      <div>
      <div className="minimal-education-card-container">
        <h5 className="minimal-education-card-title">🎓 학교</h5>
        <HistCard startDate="2016.03.01" endDate="2024.02.23" content="부산대학교 수학과"/> 
        <HistCard startDate="2021.09.01" endDate="2024.02.23" content="부산대학교 컴퓨터공학과"/>
      </div>

      {/* 학부연구생 */}
      <div className="minimal-education-card-container">
        <h5 className="minimal-education-card-title">🔬 학부연구생</h5>
        <HistCard startDate="2022.06.01" endDate="2022.08.31" content="부산대학교 산업지능화 선도 벨류체인 육성 R&D 사업"/> 
      </div>

      {/* 교내동아리 */}
      <div className="minimal-education-card-container">
        <h5 className="minimal-education-card-title">🏃🏻 교내동아리</h5>
        <HistCard startDate="2022.06.01" endDate="2023.03.01" content="부산대학교 컴퓨터 공학과 보안동아리/KEEPER"/>
      </div>

      {/* 외부교육 */}
      <div className="minimal-education-card-container">
        <h5 className="minimal-education-card-title">🏃🏻 외부교육</h5>
        <HistCard startDate="2023.02.13" endDate="2022.06.22" content="신세계아이앤씨, Spharos Academy 2기(수료)"/> 
      </div>
    </div>
    </div>
  )
}

export default MinimalEducation