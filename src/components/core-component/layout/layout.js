import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavButton from "../../common-component/nav-button/nav-button";
import { FaGithub } from "react-icons/fa";
import "./layout.css";
import Footer from '../footer/footer';
import { StaticImage } from 'gatsby-plugin-image';
import BlockLog from '../../common-component/block-log/block-log';

const Layout = ({ location, children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>      
      <div className="layout-wrapper">
        <header className="layout-header">
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
        <a className={`github ${showScrollButton ? "move-up" : "move-down"}`} href="https://github.com/geunskoo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={25} />
        </a>
          <div className={`scroll-to-top ${showScrollButton ? "show" : "hide"}`} >
            <button onClick={scrollToTop}>⬆︎</button>
          </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Layout
