import React from "react";
import "./career.css";

import CareerCard from "../../common-component/career-card/career-card";
import SectionCardTitle from "../../common-component/section-card-title/section-card-title";

const Career = () => {

  const sectionCardTitle = "Career";

  return (
    <div className="career-wrapper">
      <SectionCardTitle name={sectionCardTitle}/>
      <CareerCard imageName="shinsegae" startDate="2023.07.18" endDate="현재"/>    
    </div>
  )
}

export default Career
