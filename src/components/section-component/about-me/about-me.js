import * as React from "react";
import "./about-me.css";
import ProfileImage from "../../common-component/profile-image/profile-image";
import Experience from "../../common-component/experience/experience";
import SectionCardTitle from "../../common-component/section-card-title/section-card-title";

const AboutMe = () => {

  const sectionCardTitle = "AboutMe";

  return (
    <div className="about-wrapper">
      <SectionCardTitle name={sectionCardTitle}/>
      <div className="about-container">
        <ProfileImage/>
        <Experience/>
      </div>
    </div>
  )
}

export default AboutMe