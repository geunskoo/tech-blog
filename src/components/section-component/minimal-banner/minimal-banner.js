import React, { useRef, useLayoutEffect, useState } from "react";
import "./minimal-banner.css";
import Rocket from '../../../images/rocket.svg';

const MinimalBanner = () => {

  return (
    <div className="banner-container">
      <h1>
        <p className="banner-title">
          <span>안녕하세요,</span>
          <span className="gradient-title"> 백엔드 개발자 </span>
          <span>김태근입니다.</span>
        </p>
      </h1>
        <img src={Rocket} alt="Rocket Flying Animation"/>
    </div>
  );
};

export default MinimalBanner;
