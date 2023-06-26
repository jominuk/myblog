import React, { FC } from "react";
import styled from "styled-components";
import { skilldata } from "src/type/type";
import AiDetail from "src/components/AiDetail";

const Ai: FC<skilldata> = () => {
  return (
    <>
      <StEzip>
        <div className="Ezip"> Ai Chat </div>

        <StPeriod>
          <div className="Time">✅ 개발 기간 : 23. 06.19 ~ 23. 06. 24 </div>
          <br />
          <div
            className="Link"
            onClick={() => window.open("https://github.com/jominuk/Ai-Chat")}
          >
            Github 바로가기
          </div>

          <div
            className="Link2"
            onClick={() => {
              window.open("https://ai-chat-gamma-weld.vercel.app/");
            }}
          >
            Ai Chat 바로가기
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
        </StPeriodBox>

        <StPicture>
          <img
            alt="light"
            src={require("../image/light.png")}
            className="Picture"
          />

          <img
            alt="dark"
            src={require("../image/dark.png")}
            className="Picture"
          />
        </StPicture>

        <StTech> Detail. </StTech>

        <StPeriodBox>
          ✌️ 편리하게 사용가능한 Ai Chat 애플리케이션
          <br />
          ✌️ GPT 에서 제공하는 OpenAi API 서비스로 제작
        </StPeriodBox>

        <StTech> 🔥핵심 경험 </StTech>

        <StExperience>
          <div className="experience">
            ◻ GPT에서 제공하는 OpenAi API를 활용해 ai와 채팅가능한 애플리케이션
            개발 👍
            <br />
            <br />
            ◻ chat-GPT와 비슷한 채팅을 구현 👍
            <br />
            <br />
            ◻ 전역 상태 관리를 위한 useContext 사용 👍
            <br />
            <br />
            ◻ TypeScript를 사용함으로 한층 더 업그레이드 지식 👍
            <br />
          </div>
        </StExperience>

        <StTech> 🪡 트러블 슈팅 </StTech>

        <AiDetail />

        <div style={{ height: "100px" }}></div>
      </StEzip>
    </>
  );
};

export default Ai;

const StEzip = styled.div`
  margin: auto;
  width: 80%;
  height: 100%;
  min-width: 850px;

  .Ezip {
    color: white;
    margin: 0 0 30px 20px;
    min-width: 850px;
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

  .Link2 {
    margin-top: 20px;
    color: white;
    border-bottom: 1px solid powderblue;
    width: 125px;
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
  min-width: 850px;
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
  min-width: 850px;

  .experience {
    color: white;
    font-size: 15px;
  }
`;
