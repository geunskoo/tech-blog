import React, {useState} from "react";
import "./project-card.css";
import Skill from "../skill/skill";

const ProjectCard = ({ project }) => {

  const [isFlipped, setIsFlipped] = useState(false);

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

  const handleClick = () => {
    console.log("딸깍");
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
      <div className="project-card-year-tag">
        {project.yearEnd && (<h2>{yearTag}</h2>)}
        <div className="vr"></div>
      </div>

      <div className="card-flip-container" onClick={handleClick}>
        <div className={`card-flipper ${isFlipped ? 'flip' : ''}`}>
          <div className="project-card-front">
              <div className="project-card-image-container">
                <img className="project-card-image" src={imgSrc} alt="profile" width={60} height={60} style={{borderRadius :"0.65rem"}}/>
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
          <div className="project-card-back" >
            <p className="project-card-back-content"><span style={{fontFamily: "var(--fontFamily-dohyeon)", fontSize: "var(--fontSize-1)"}}>• 참 여 인 원 : </span><span className="project-card-back-active">{project.participants}</span></p>
            <div style={{display: "flex"}}>
              <p className="project-card-back-content"><span style={{fontFamily: "var(--fontFamily-dohyeon)", fontSize: "var(--fontSize-1)"}}>• 역할 / 성과 : </span></p>
              <div className="project-card-back-active-container">
                {project.activities.map((active) => <p className="project-card-back-active">{active}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
