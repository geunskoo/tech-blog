import React, { useState }from "react";
import { navigate } from 'gatsby';

import "./bio.css";

import TypingBanner from "../../components/section-component/typing-banner/typing-banner.js"
import Career from "../../components/section-component/career/career.js"
import Education from "../../components/section-component/education/education.js"
import AboutMe from "../../components/section-component/about-me/about-me.js"
import Seo from "../../components/core-component/seo.js"
import Project from "../../components/section-component/project/project.js";

const BioPage = () => {
  
  return (
    <div className="bio-wrapper">
      <TypingBanner/>
      <AboutMe/>
      <Career/>
      <Education/>
      <Project/>
    </div>
  )
}
export default BioPage

export const Head = () => <Seo title="Bio" />