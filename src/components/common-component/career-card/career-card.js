import React from "react";
import "./career-card.css";
import Skill from "../skill/skill";

const CareerCard = ({career}) => {

  let imgSrc;
  if (career.imageName === "shinsegae") {
    imgSrc = require("../../../images/shinsegaeinc.png").default;
  } else {
    imgSrc = require("../../../images/water.png").default;
  }

  return (
    <div className="career-card-wrapper">
      <div className="career-card-image-container">
        <img className="career-card-image" src={imgSrc} alt="profile" width={140} height={140}/>
      </div>
      <div className="career-card-content-container">
        <h4 className="career-card-title">{career.name}</h4>
        <p className="career-card-job-duty">{career.jobDuty}</p>
        <p className="career-card-date">{career.startDate} ~ {career.endDate}</p>
        <div className="career-card-content">
          <p>&nbsp; 신세계아이앤씨 안전관리시스템구축TF팀에서 신규 서비스를 개발 중 입니다. Angular와 Spring 프레임워크를 이용한 풀스택 개발을 담당하고 있습니다.</p>
        </div>
        <div className="career-card-skill">
            {career.skills.map((name, index) => <Skill key={index} name={name}/>)}
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
