import * as React from "react"
import { Link } from "gatsby"

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
          <Link to="/"><div className="title">태근 후, 글쓰기</div></Link>
          <div className="navigation-buttons">
            <Link to="/bio"><button >Bio</button></Link>
            <Link to="/blog"><button>Blog</button></Link>
            <Link to="/book"><button>Book</button></Link>
            <Link to="/others"><button>others</button></Link>
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
