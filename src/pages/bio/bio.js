  import React, { useState, useEffect, useRef } from "react";
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
    const [isVisible, setIsVisible] = useState({
      banner: false,
      aboutMe: false,
      aboutMe2: false,
      career: false,
      project: false,
      education: false,
    });

    const bannerRef = useRef(null);
    const aboutMeRef = useRef(null);
    const aboutMe2Ref = useRef(null);
    const careerRef = useRef(null);
    const projectRef = useRef(null);
    const educationRef = useRef(null);

    useEffect(() => {
      const defaultObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [entry.target.getAttribute('data-section')]: true }));
            }
          });
        },
        { threshold: 0.5 } // 다른 요소들의 기본 threshold 설정
      );

      const projectObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [entry.target.getAttribute('data-section')]: true }));
            }
          });
        },
        { threshold: 0.1 } // MinimalProject 요소에 대한 특별한 threshold 설정
      );

      [bannerRef, aboutMeRef, aboutMe2Ref, careerRef, educationRef].forEach(ref => {
        if (ref.current) {
          defaultObserver.observe(ref.current);
        }
      });

      if (projectRef.current) {
        projectObserver.observe(projectRef.current);
      }

      return () => {
        defaultObserver.disconnect();
        projectObserver.disconnect();
      };
    }, []);

    return (
      <div className="bio-wrapper">
        <div ref={bannerRef} data-section="banner" className={`fade-in-section ${isVisible.banner ? 'fade-in-visible' : ''}`}>
          <MinimalBanner/>
        </div>
        <div ref={aboutMeRef} data-section="aboutMe" className={`fade-in-section ${isVisible.aboutMe ? 'fade-in-visible' : ''}`}>
          <MinimalAboutMe/>
        </div>
        <div ref={aboutMe2Ref} data-section="aboutMe2" className={`fade-in-section ${isVisible.aboutMe2 ? 'fade-in-visible' : ''}`}>
          <MinimalAboutMe2/>
        </div>
        <div ref={careerRef} data-section="career" className={`fade-in-section ${isVisible.career ? 'fade-in-visible' : ''}`}>
          <MinimalCareer/>
        </div>
        <div ref={projectRef} data-section="project" className={`fade-in-section ${isVisible.project ? 'fade-in-visible' : ''}`}>
          <MinimalProject/>
        </div>
        <div ref={educationRef} data-section="education" className={`fade-in-section ${isVisible.education ? 'fade-in-visible' : ''}`}>
          <MinimalEducation/>
        </div>
      </div>
    )
  }
  export default BioPage

  export const Head = () => <Seo title="Bio" />
