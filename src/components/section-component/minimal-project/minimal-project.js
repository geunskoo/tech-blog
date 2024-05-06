import * as React from "react";
import "./minimal-project.css";
import MinimalProjectCard from "../../common-component/minimal-project-card/minimal-project-card";

const MinimalProject = () => {

  const projects = [
    {
      imageName: "log",
      name: "기술블로그",
      role: "개인프로젝트",
      description: "Gatsby 기반 기술블로그 개발",
      participants: "개인",
      startDate: "2024.01.01",
      endDate: "ing",
      skills:["Js", "Gastby", "React", "GraphQL", "GA4"],
      yearEnd: true,
      activities:[
        "➀ Gatsby프레임워크를 이용한 서버리스 블로그 호스팅",
        "➁ 다양한 오픈소스 plugin를 찾고 도입하는 경험",
      ],
      images : [
        "bbbbb.png",
        "myblog.png",
        "myblog2.png",
        "myblog3.png"
      ]
    },
    {
      imageName: "blocktoon",
      name: "BLOCK TOON",
      role: "백엔드개발(팀장)",
      description: "웹툰, 게임! 컨텐츠 플랫폼 프로젝트",
      participants: "총 5명(BE 3, FE 2)",
      startDate: "2023.04.10",
      endDate: "2023.06.15",
      skills:["Java", "Spring", "JPA", "Spring Cloud Eureka/Gateway", "Redis", "MySQL" ,"Kafka", "Docker"],
      yearEnd: true,
      activities:[
        "➀ 팀장/백엔드개발자 역할 수행",
        "➁ 구매서비스, 빌링서비스 개발 담당",
        "➂ 서버아키텍처인 헥사고날아키텍쳐 도입 리딩",
        "➃ 코드 형상관리 컨벤션 생성 및 리뷰 문화 주도",
        "➄ 데이터베이스 이중화(Replication)를 통해 커넥션풀에 부하를 줄임",
        "➅ kakao pay결제 API 사용 경험"
      ],
      images : [
        "blocktoon.png",
        "blocktooneventstorm4.png",
        "blocktooneventstorm2.png",
        "webtoon2.png"
      ]
    },
    {
      imageName: "starbucks",
      name: "스타벅스 온라인스토어 클론코딩",
      role: "백엔드개발",
      description: "스타벅스 온라인스토어 클론코딩 프로젝트",
      participants: "총 6명(BE 4, FE 2)",
      startDate: "2023.02.20",
      endDate: "2023.04.07",
      skills:["Java", "Spring", "JPA", "Spring Security", "Redis", "MySQL"],
      yearEnd: false,
      activities:[
        "➀ 백엔드개발자 역할 수행",
        "➁ 유저서비스 및 인증/인가 개발 담당",
        "➂ jwt, spring security를 사용하여 인증/인가 로직 처리",
        "➃ kakao pay결제 API 사용 경험",
      ],
      images : [
        "starbucks.png",
        "starbucksClone3.png",
        "starbucksClone2.png",
        "starbucksClone1.png"
      ]
    },
    {
      imageName: "keeper",
      name: "KEEPER",
      role: "백엔드개발",
      description: "부산대 컴퓨터 공학과 보안동아리 홈페이지 리팩터링 프로젝트",
      participants: "총 4명(BE 4)",
      startDate: "2022.12.25",
      endDate: "2023.02.11",
      skills:["Java", "Spring", "JPA", "MySQL"],
      yearEnd: true,
      activities:[
        "➀ 백엔드개발자 역할 수행",
        "➁ 동아리선배들로부터 코드리뷰를 받으며 간단한 게임 도메인 개발 경험",
        "➂ 매주 3시간 모던자바인액션/스프링/JPA를 주제로 스터디 경험",
        "➃ Git Flow 방식의 협업 경험",
      ],
      images : [
        "keeper.png",
        "keeper2.png",
        "keeper.png",
        "keeper2.png"
      ]
    },
    {
      imageName: "warehouse",
      name: "AGV 물류창고 자료구조",
      role: "학부연구생",
      description: "학부연구생 활동, AGV용 물류창고 자료구조 구축 프로젝트",
      participants: "총 6명(학부연구생)",
      startDate: "2022.06.01",
      endDate: "2022.09.01",
      skills:["Python", "Pandas"],
      yearEnd: false,
      activities:[
        "➀ 제공받은 적재 데이터(상품)으로 부터 랜덤한 주문내역을 생성하는 역할 수행",
        "➁ 물류창고 자료구조를 만들기 위해 선반을 설계하는 로직 작성에 기여",
      ],
      images : [
        "warehouse.png",
        "ffm.png",
        "warehouse.png",
        "ffm2.png",
      ]
    },
  ]

  return (
    <div className="minimal-project-wrapper">
      <h1 style={{  textAlign: "center", marginBottom:"5rem"}}>저를 성장시켜준 프로젝트를 소개합니다.</h1>
      {projects.map(project => {return <MinimalProjectCard project={project}/>})}
    </div>
  )
}

export default MinimalProject