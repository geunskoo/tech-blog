import * as React from "react"
import { Link } from "gatsby"
import NavigationButton from "./NavigateButton"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="navigation-bar">
          <Link to="/bio/">
            <div className="title">태근 후, 글쓰기</div>
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
