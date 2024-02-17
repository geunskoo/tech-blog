import React from "react";

const CareerCard = ({ imageName, startDate, endDate }) => {
  let imgSrc;

  // 이미지 이름에 따라 이미지를 import
  if (imageName === "shinsegae") {
    imgSrc = require("../../../images/shinsegaeinc.png").default;
  } else if (imageName === "water") {
    imgSrc = require("../../../images/water.png").default;
  }

  return (
    <div>
      <div className="career-card-container">
        <div className="career-card-image">
          <img src={imgSrc}
              width={160}
              height={160}
              alt="profile"/>
        </div>
        <div>
          <p className="career-card-title">안전관리시스템 구축TF</p>
          <p className="career-card-date">{startDate} ~ {endDate}</p>
          <ul className="career-card-content">
            <li>화면 개발 및 서버 개발</li>
            <li>Spring, Angular, IBSheet8, Oracle</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
