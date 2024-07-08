import React from "react";
import "./minimal-project-card.css";
import Skill from "../skill/skill";
import MinimalSlider from "../../section-component/minimal-slider/minimal-slider";

const MinimalProjectCard = ({ project }) => {

  return (
    <div style={{width:"360px", display: "flex", flexWrap:"wrap", gap:"20px", justifyContent:"center", boxShadow: "0 4px 8px var(--color-gray)", borderRadius:"0.85rem", padding:"1rem", backgroundColor:"white"}}>
      <MinimalSlider images={project.images}/>
      <div className="minimal-project-container">
        <a href={project.link} target="_blank" style={{textDecoration:"none"}}><h4 className="project-title">{project.name} ⇱ </h4></a>
        <p className="project-description">{project.description}</p>
        <p className="project-date">{project.startDate} ~ {project.endDate}</p>
        
        <div className="project-skill">
          {project.skills.map((name, index) => <Skill key={index} name={name}/>)}
        </div>
        <div className="project-content-container">
          {project.activities.map(content => <p className="project-content">{content}</p>)}
        </div>

      </div>
    </div>
  );
}

export default MinimalProjectCard;
