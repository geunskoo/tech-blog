import * as React from "react"
import ImageCard from "./ImageCard"
import Experience from "./Experience"

const AboutMe = () => {

  return (
    <div className="about-wrapper">
      <h3>AboutMe</h3>
      <div className="about-container">
        <ImageCard/>
        <Experience/>
      </div>
    </div>
  )
}

export default AboutMe