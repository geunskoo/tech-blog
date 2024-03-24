import React from "react";
import "./career.css";

import CareerCard from "../../common-component/career-card/career-card";
import SectionCardTitle from "../../common-component/section-card-title/section-card-title";

const Career = () => {

  const sectionCardTitle = "Career";

  const careers = [
    {
      imageName: "shinsegae",
      name: "신세계아이앤씨",
      jobDuty: "Back-End & Front-End Developer",
      startDate: "2023.07.18",
      endDate: "현재",
      skills:["Java", "Spring", "TypeScript", "Angular", "Oracle", "IBSheet8"],
    },
  ]

  return (
    <div className="career-wrapper">
      <SectionCardTitle name={sectionCardTitle}/>
      <div className="career-list">
        {careers.map((career, index) => ( <CareerCard key={index} career={career}/> ))}
      </div>
    </div>
  )
}

export default Career
