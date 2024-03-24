import React, { useState }from "react";
import { navigate } from 'gatsby';

import "./bio.css";

import TypingBanner from "../../components/section-component/typing-banner/typing-banner.js"
import Career from "../../components/section-component/career/career.js"
import Education from "../../components/section-component/education/education.js"
import AboutMe from "../../components/section-component/about-me/about-me.js"
import Seo from "../../components/core-component/seo.js"
import Project from "../../components/section-component/project/project.js";
import Modal from "../../components/common-component/modal/modal.js";

const BioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // 선택적: URL을 업데이트하여 모달 상태를 반영하고 싶다면 여기서 navigate를 사용
    // navigate('/?modal=true', { replace: true });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // 모달 상태 URL에서 제거
    // navigate('/', { replace: true });
  };
  return (
    <div className="bio-wrapper">
      {/* <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>This is a simple modal.</p>
      </Modal> */}
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