import React from "react";
import "./minimal-project-card.css";
import Skill from "../skill/skill";
import MinimalSlider from "../../section-component/minimal-slider/minimal-slider";

const MinimalProjectCard = ({ project }) => {

  return (
    <div style={{display: "flex", flexWrap:"wrap", gap:"100px", marginBottom:"6rem", justifyContent:"center"}}>
      <MinimalSlider images={project.images}/>
      <div className="minimal-project-container">
        <h4 className="project-title">{project.name}</h4>
        <p className="project-description">{project.description}</p>
        <p className="project-date">{project.startDate} ~ {project.endDate}</p>
        
        <div className="project-content-container">
          {project.activities.map(content => <p className="project-content">{content}</p>)}
        </div>

        <div className="project-skill">
          {project.skills.map((name, index) => <Skill key={index} name={name}/>)}
        </div>
      </div>
    </div>
  );
}

export default MinimalProjectCard;
