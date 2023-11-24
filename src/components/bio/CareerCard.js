import React from "react";

const CareerCard = ({ imageName, startDate, endDate }) => {
  let imgSrc;

  // 이미지 이름에 따라 이미지를 import
  if (imageName === "shinsegae") {
    imgSrc = require("../../images/shinsegaeinc.png").default;
  } else if (imageName === "water") {
    imgSrc = require("../../images/water.png").default;
  }

  return (
    <div>
      <img style={{borderRadius: "10px",  border: "1px solid #ddd", marginBottom: '0px' }} 
        src={imgSrc}
        width={160}
        height={160}
        alt="profile"
      />
      <p style={{marginBottom: '0px', fontSize: '18px' }}>안전관리시스템 구축 TF</p>
      <p style={{color: '#808080', marginBottom: '10px' }}>{startDate} ~ {endDate}</p>
      <ul style={{ listStyle: 'square', margin: 0, padding: 0, paddingLeft: '15px'}}>
        <li style={{ marginBottom: '0px' }}>화면 개발 및 서버 개발</li>
        <li style={{ marginBottom: '0px' }}>Spring, Angular, IBSheet8, Oracle</li>
      </ul>
    </div>
  );
}

export default CareerCard;
