import React, { useState }from "react";
import { navigate } from 'gatsby';

import "./bio.css";

import Career from "../../components/section-component/career/career.js"
import Education from "../../components/section-component/education/education.js"
import Seo from "../../components/core-component/seo.js"
import Project from "../../components/section-component/project/project.js";
import MinimalBanner from "../../components/section-component/minimal-banner/minimal-banner.js";
import MinimalAboutMe from "../../components/section-component/minimal-about-me/minimal-about-me.js";
import MinimalAboutMe2 from "../../components/section-component/minimal-about-me2/minimal-about-me2.js";
import MinimalCareer from "../../components/section-component/minimal-career/minimal-career.js";
import MinimalSlider from "../../components/section-component/minimal-slider/minimal-slider.js";
import MinimalEducation from "../../components/section-component/minimal-education/minimal-education.js";
import MinimalProject from "../../components/section-component/minimal-project/minimal-project.js";

const BioPage = () => {
  
  return (
    <div className="bio-wrapper">
      <MinimalBanner/>
      <MinimalAboutMe/>
      <MinimalAboutMe2/>
      <MinimalCareer/>
      <MinimalProject/>
      <MinimalEducation/>
    </div>
  )
}
export default BioPage

export const Head = () => <Seo title="Bio" />