import * as React from "react"

import Layout from "../components/layout"
import Education from "../components/bio/Education"
import Banner from "../components/bio/Banner"

import Seo from "../components/seo"
import AboutMe from "../components/bio/AboutMe"
import Career from "../components/bio/Career"

const BioPage = ({ data, location }) => {
  return (
    <Layout location={location} >
      <div className="bio-wrapper">
        <Banner/>
        <AboutMe/>
        <Career/>
        <Education/>
      </div>
    </Layout>
  )
}
export default BioPage

export const Head = () => <Seo title="Bio" />