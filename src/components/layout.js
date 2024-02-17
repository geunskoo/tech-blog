import * as React from "react"
import { Link } from "gatsby"
import NavigationButton from "./component/nav-button/nav-button"
import { TransitionGroup, CSSTransition } from "react-transition-group"

/* 화면 레이아웃 */
/* gatsby-config.js에 layout으로 등록 */
const Layout = ({ location, children }) => {

  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <div className="layout-header-bar">
          <Link to="/bio/">  
            <div className="layout-header-title">태근 후 글쓰기 📝</div>
          </Link>
          <nav>
            <NavigationButton to="/bio/">Bio</NavigationButton>
            <NavigationButton to="/blog/">Blog</NavigationButton>
            <NavigationButton to="/book/">Book</NavigationButton>
            <NavigationButton to="/byeond/">Byeond</NavigationButton>
          </nav>
        </div>
      </header>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <main>{children}</main>
        </CSSTransition>
        {/* <div className="loading-overlay"> */}
        {/* <div className="spinner"></div> 로딩 스피너 애니메이션 */}
        {/* <p>로딩중...</p> */}
        {/* </div> */}
      </TransitionGroup>
      <footer>
        © Tae Geun, Kim
        {` `}
      </footer>
    </div>
  )
}

export default Layout
