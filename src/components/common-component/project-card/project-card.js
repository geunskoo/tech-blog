import React from "react";
import "./project-card.css";
import Skill from "../skill/skill";

const ProjectCard = ({ project }) => {

  let imgSrc;
  if (project.imageName === "blocktoon") {
    imgSrc = require("../../../images/blocktoon.png").default;
  }else if (project.imageName === "blocktoon"){
    imgSrc = require("../../../images/blocktoon.png").default;
  }else if (project.imageName === "starbucks"){
    imgSrc = require("../../../images/starbucks.png").default;
  }else if (project.imageName === "keeper"){
    imgSrc = require("../../../images/keeper.png").default;
  }else if (project.imageName === "warehouse"){
    imgSrc = require("../../../images/warehouse.png").default;
  }else if (project.imageName === "bbbbb"){
    imgSrc = require("../../../images/bbbbb.png").default;
  }

  let yearTag = ''
  if (project.yearEnd){
    yearTag = project.startDate.slice(0,4)
  }

  return (
    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
      <div className="project-card-year-tag">
        {project.yearEnd && (<h2>{yearTag}</h2>)}
        <div className="vr"></div>
      </div>
      <div className="project-card-wrapper">
        <div className="project-card-image-container">
          <img className="project-card-image" src={imgSrc} alt="profile" width={80} height={80} style={{borderRadius :"0.85rem"}}/>
        </div>
        <div className="project-card-content-container">
          <h4 className="project-card-title">{project.name}</h4>
          <p className="project-card-description">{project.description}</p>
          <p className="project-card-date">{project.startDate} ~ {project.endDate}</p>
          <div className="project-card-skill">
            {project.skills.map((name, index) => <Skill key={index} name={name}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
