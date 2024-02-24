import React, { useEffect } from "react"

import Seo from "../components/core-component/seo"



const BlogIndex = () => {

  useEffect(() => {
    window.location.replace("/bio/");
  }, []);

  return (
    <div>안녕!</div>
  )
}

export default BlogIndex

export const Head = () => <Seo title="이동중.." />