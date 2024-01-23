import * as React from "react"
import { Link } from "gatsby"
import NavigationButton from "./NavigateButton"

const Layout = ({ location, title, children }) => {

  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <div className="layout-header-bar">
          <Link to="/bio/">
            <div className="layout-header-title">태근 후, 글쓰기 📝</div>
          </Link>
          <div>
            <NavigationButton to="/bio/">Bio</NavigationButton>
            <NavigationButton to="/blog/">Blog</NavigationButton>
            <NavigationButton to="/book/">Book</NavigationButton>
            <NavigationButton to="/byeond/">Byeond</NavigationButton>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        © Tae Geun, Kim
        {` `}
      </footer>
    </div>
  )
}

export default Layout
