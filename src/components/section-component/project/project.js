import React from "react";
import "./project.css";

import SectionCardTitle from "../../common-component/section-card-title/section-card-title";
import ProjectCard from "../../common-component/project-card/project-card";

const Project = () => {

  const sectionCardTitle = "Projects";

  const projects = [
    {
      imageName: "bbbbb",
      name: "퇴근 후 태근 블로그",
      description: "Gatsby 기반 기술블로그 개발",
      startDate: "2024.01.01",
      endDate: "",
      skills:["Js", "Gastby", "React", "GraphQL", "GA4"],
      yearEnd: true,
    },
    {
      imageName: "blocktoon",
      name: "BLOCK TOON",
      description: "웹툰, 게임! 컨텐츠 플랫폼 프로젝트",
      startDate: "2023.04.10",
      endDate: "2023.06.15",
      skills:["Java", "Spring", "JPA", "Spring Cloud Eureka/Gateway", "Redis", "MySQL" ,"Kafka", "Docker"],
      yearEnd: true,

    },
    {
      imageName: "starbucks",
      name: "스타벅스 온라인스토어 클론코딩",
      description: "스타벅스 온라인스토어 클론코딩 프로젝트",
      startDate: "2023.02.20",
      endDate: "2023.04.07",
      skills:["Java", "Spring", "JPA", "Spring Security", "Redis", "MySQL"],
      yearEnd: false,
    },
    {
      imageName: "keeper",
      name: "KEEPER",
      description: "부산대 컴퓨터 공학과 보안동아리 홈페이지 제작 프로젝트",
      startDate: "2022.12.25",
      endDate: "2023.02.11",
      skills:["Java", "Spring", "JPA", "MySQL"],
      yearEnd: true,
    },
    {
      imageName: "warehouse",
      name: "AGV 물류창고 자료구조",
      description: "학부연구생 활동, AGV용 물류창고 자료구조 구축 프로젝트",
      startDate: "2022.06.01",
      endDate: "2022.09.01",
      skills:["Python", "Pandas"],
      yearEnd: false,
    },
  ]

  return (
    <div className="project-wrapper">
      <SectionCardTitle name={sectionCardTitle}/>
      <div className="project-list">
        {projects.map((project, index) => ( <ProjectCard key={index} project={project}/> ))}
      </div>
    </div>
  )
}

export default Project
