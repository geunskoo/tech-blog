import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <h1>404: Not Found</h1>
      <p>해당 페이지는 존재하지 않습니다...🥲</p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
