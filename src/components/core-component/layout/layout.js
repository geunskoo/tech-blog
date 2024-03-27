import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavButton from "../../common-component/nav-button/nav-button";
import { FaGithub } from "react-icons/fa";
import "./layout.css";
import Footer from '../footer/footer';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocation } from "@reach/router";
import Modal from '../../common-component/modal/modal';
import Utterances from '../Utterances';

const Layout = ({ location, children }) => {

  const [hideHeader, setHideHeader] = useState(false);

  const [showScrollButton, setShowScrollButton] = useState(false);

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

  const curLocation = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
        const markdownPage = curLocation.pathname.split('-')[1];
        console.log(markdownPage);
        if (markdownPage){
          setHideHeader(true);
        }
      } else {
        setShowScrollButton(false);
        setHideHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [curLocation]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <div className="layout-wrapper">
        <header className={`layout-header ${hideHeader ? 'header-hidden' : ''}`}>
        <Link className="layout-header-title" to="/bio/">
          <div style={{display:"flex"}}><span style={{fontStyle:"italic", marginTop:"0.25rem"}}>블</span><span className='point-title'>럭</span><span style={{fontStyle:"italic", marginTop:"0.25rem"}}>로그</span></div></Link>
          <nav className="layout-nav-container">
            <NavButton to="/bio/">Bio</NavButton>
            <NavButton to="/blog/">Blog</NavButton>
            <NavButton to="/book/">Book</NavButton>
            {/* <NavButton to="/byeond/">Byeond</NavButton> */}
            <NavButton to="">Byeond</NavButton>
          </nav>
        </header>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <main className="layout-conent-container">{children}</main>
          </CSSTransition>
        </TransitionGroup>
        
        <div className={`lock ${showScrollButton ? "move-up" : "move-down"}`} >
          <button style={{display:"flex", justifyContent:"center", alignItems:"center"}} onClick={handleOpenModal}><StaticImage style={{width:"22.5px", height:"22.5px", position:"relative"}} src= "../../../images/chat.png" alt="newtag" layout="fixed"/></button>
        </div>
        <a className={`github ${showScrollButton ? "move-up" : "move-down"}`} href="https://github.com/geunskoo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={25} />
        </a>
          <div className={`scroll-to-top ${showScrollButton ? "show" : "hide"}`} >
            <button style={{display:"flex", justifyContent:"center", alignItems:"center"}} onClick={scrollToTop}><StaticImage style={{width:"25px", height:"25px", position:"relative"}} src= "../../../images/arrow.png" alt="newtag" layout="fixed"/></button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 style={{margin:"1rem 0 1rem 0"}}>💬 소통해요! </h2>
          <p style={{margin: "0 0 2rem 1rem"}}>편안하게 이야기하고 소통해보아요~</p>
          <Utterances repo="geunskoo/tech-blog" />
        </Modal>
        <Footer/>
    </div>
  )
}

export default Layout
