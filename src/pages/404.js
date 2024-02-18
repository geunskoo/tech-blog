import * as React from "react"
import Seo from "../components/core-component/seo"

const NotFoundPage = ({ data, location }) => {
  return (
      <div>
        <h1>404: Not Found</h1>
        <p>해당 페이지는 존재하지 않습니다...🥲</p>
      </div>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
