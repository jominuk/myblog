import React, { FC } from "react";
import SlackDetail from "src/components/SlackDetail";
import styled from "styled-components";

interface skilldata {
  alt: string;
  src: any;
}

const Slack: FC<skilldata> = () => {
  return (
    <>
      <StEzip>
        <div className="Ezip"> Slack</div>

        <StPeriod>
          <div className="Time">✅ 개발 기간 : 23. 04. 24 ~ 23. 05. 12 </div>
          <br />
          <div
            className="Link"
            onClick={() => {
              window.open("https://github.com/jominuk/Clone_Project-Slack");
            }}
          >
            Github 바로가기
          </div>
        </StPeriod>

        <StTech> Tech. </StTech>

        <StPeriodBox>
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=fff"
            alt="JS"
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=white"
            alt="React"
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=TypeScript&logoColor=white"
            alt="TypeScript"
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/SWR-FFFFFF?style=plastic&logo=SWR&logoColor=white"
            alt="SWR"
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/Socket.io-010101?style=plastic&logo=Socket.io&logoColor=white"
            alt="Socket.io"
            className="LogoImage"
          />
        </StPeriodBox>

        <StPicture>
          <img
            alt="Join"
            src={require("../image/Join.png")}
            className="Picture"
          />

          <img
            alt="Chat"
            src={require("../image/Chat.png")}
            className="Picture"
          />
        </StPicture>

        <StTech> 🔥 핵심 경험 </StTech>

        <StExperience>
          <div className="experience">
            ◻ Typescript를 통한 Clone Project 개발 👍
            <br />
            &nbsp;&nbsp; ◻ 개발 생산성을 높여 코드 작성 시 발생할 수 있는 오류를
            사전에 방지,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;또한 협업을 통해 다른 사람들의
            코드 수정해 주는 과정에서 진입 장벽을 많이 낮춰줌
            <br />
            &nbsp;&nbsp;&nbsp;◻ 정적 타입 체크를 제공하여 개발자가 코드 작성 시
            발생 할 수 있는 오류를 사전에 방지
            <br />
            <br />
            ◻ Redux-toolkit 대체 할 SWR을 사용한 Clone Project 개발 👍
            <br />
            &nbsp;&nbsp; ◻ SWR은 React-Query와 유사하며, 간단하고 매우 직관적인
            API를 제공하여 데이터를 가져와 캐싱 하여 업데이트를 감지하는
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;등의 작업을 쉽게 수행
            <br />
            &nbsp;&nbsp; ◻ SWR은 데이터 요청 시간을 최소화하고, 캐시를 통해
            빠르게 데이터를 로드 하므로 페이지 로딩 시간을 줄임
            <br />
            <br />
            ◻ Socket.io 를 통한 실시간 채팅 개발 👍
            <br />
            &nbsp;&nbsp; ◻ 클라이언트와 서버간에 실시간 양방향 통신을 가능하여,
            실시간 대화형 경험이 가능
            <br />
            &nbsp;&nbsp; ◻ 실시간 통신 설정을 위한 간단하고 사용하기 쉬운 API를
            제공
          </div>
        </StExperience>

        <StTech> 🪡 트러블 슈팅 </StTech>

        <SlackDetail />

        <div style={{ height: "70px" }} />
      </StEzip>
    </>
  );
};

export default Slack;

const StEzip = styled.div`
  margin: auto;
  width: 80%;
  height: 100%;

  .Ezip {
    color: white;
    margin: 0 0 30px 20px;
    font-size: 25px;
    font-weight: 600;
  }
`;

const StPeriod = styled.div`
  background-color: rgba(255, 113, 175, 0.2);
  padding: 30px;
  border-radius: 20px;

  .Time {
    color: white;
    font-size: 17px;
    font-weight: 800;
  }

  .Link {
    color: white;
    border-bottom: 1px solid powderblue;
    width: 120px;
    cursor: pointer;
  }
`;

const StTech = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin: 50px 0 0 20px;
`;

const StPeriodBox = styled.div`
  margin-top: 30px;
  background-color: rgba(255, 113, 175, 0.2);
  padding: 30px;
  border-radius: 20px;
  color: white;

  .LogoImage {
    margin-left: 20px;
  }
`;

const StPicture = styled.div`
  display: flex;
  justify-content: center;
  color: white;

  .Picture {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    margin: 50px 30px 0 30px;
  }
`;

const StExperience = styled.div`
  background-color: rgba(255, 113, 175, 0.2);
  padding: 30px;
  border-radius: 20px;
  margin-top: 20px;

  .experience {
    color: white;
    font-size: 15px;
  }
`;
