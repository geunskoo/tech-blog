import React from "react"
import CareerCard from "./CareerCard"

const Career = () => {
  return (
    <div>
        <h3>Career</h3>
        {/* 신세계아이앤씨 */}
        <div>
            <CareerCard imageName="shinsegae" startDate="2023.07.18" endDate="현재"/>  
        </div>

      
        {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>◦</p>
        <p>◦</p>
        <p>◦</p>
        <p>What's Next ?</p>
        </div> */}
    </div>
  )
}

export default Career
