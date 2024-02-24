import * as React from "react";
import "./layout.css";
import { Link } from "gatsby";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavButton from "../../common-component/nav-button/nav-button";
import { FaGithub } from "react-icons/fa";


/* 화면 레이아웃 */
/* gatsby-config.js에 layout으로 등록 */
const Layout = ({ location, children }) => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  

  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <Link className="layout-header-title" to="/bio/">태근 후 글쓰기 📝</Link>
        <nav className="layout-nav-container">
          <NavButton to="/bio/">Bio</NavButton>
          <NavButton to="/blog/">Blog</NavButton>
          <NavButton to="/book/">Book</NavButton>
          <NavButton to="/byeond/">Byeond</NavButton>
        </nav>
      </header>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <main className="layout-conent-container">{children}</main>
        </CSSTransition>
        {/* <div className="loading-overlay"> */}
        {/* <div className="spinner"></div> 로딩 스피너 애니메이션 */}
        {/* <p>로딩중...</p> */}
        {/* </div> */}
      </TransitionGroup>
      {/* <div className="slack-chat">
        <button>💬</button>
      </div> */}
      <a className="github" href="https://github.com/geunskoo" target="_blank">
        <FaGithub size={25} />
      </a>
      <div className="scroll-to-top">
        <button onClick={scrollToTop}>
          <span>⇪</span>
        </button>
      </div>
      <footer>
        © Tae Geun, Kim
        {` `}
      </footer>
    </div>
  )
}

export default Layout
