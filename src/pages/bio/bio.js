import * as React from "react"
import Banner from "../../components/section/typing-banner/typing-banner.js"
import Career from "../../components/section/career/career.js"
import Education from "../../components/section/education/education.js"
import AboutMe from "../../components/section/about-me/about-me.js"
import Seo from "../../components/seo.js"



const BioPage = ({ data, location }) => {
  return (
    <div className="bio-wrapper">
      <Banner/>
      <AboutMe/>
      <Career/>
      <Education/>
    </div>
  )
}
export default BioPage

export const Head = () => <Seo title="Bio" />