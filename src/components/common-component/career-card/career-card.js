import React from "react";
import "./career-card.css";

const CareerCard = ({ imageName, startDate, endDate }) => {

  let imgSrc;

  // 이미지 이름에 따라 이미지를 import
  if (imageName === "shinsegae") {
    imgSrc = require("../../../images/shinsegaeinc.png").default;
  } else if (imageName === "water") {
    imgSrc = require("../../../images/water.png").default;
  }

  return (
    <div className="career-card-wrapper">
      <div className="career-card-image-container">
        <img className="career-card-image" src={imgSrc} alt="profile" width={150} height={150}/>
      </div>
      <div className="career-card-content-container">
        <h4 className="career-card-title">신세계아이앤씨, 안전관리시스템 구축TF</h4>
        <p className="career-card-date">{startDate} ~ {endDate}</p>
        <div className="career-card-content">
          <p>• 화면 개발 및 서버 개발</p>
          <p>• Spring, Angular, IBSheet8, Oracle</p>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
