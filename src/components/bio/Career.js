import React from "react"
import CareerCard from "./CareerCard"

const Career = () => {
  return (
    <div className="career-wrapper">
        <h3>Career</h3>
        {/* 신세계아이앤씨 */}
        <div>
            <CareerCard imageName="shinsegae" startDate="2023.07.18" endDate="현재"/>  
        </div>
    </div>
  )
}

export default Career
