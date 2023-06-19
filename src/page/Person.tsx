import React, { FC } from "react";
import styled from "styled-components";
import { skilldata } from "src/type/type";

const Person: FC<skilldata> = () => {
  return (
    <>
      <StEzip>
        <div className="Ezip"> 개인 웹 포트폴리오 </div>

        <StPeriod>
          <div className="Time">✅ 개발 기간 : 23. 06.12 ~ 23. 06. 18 </div>
          <br />
          <div
            className="Link"
            onClick={() => window.open("https://github.com/jominuk/myblog")}
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
        </StPeriodBox>

        <StPicture>
          <img
            alt="solo"
            src={require("../image/solo.png")}
            className="Picture"
          />

          <img
            alt="skill"
            src={require("../image/skill.png")}
            className="Picture"
          />
        </StPicture>

        <StTech> Detail. </StTech>

        <StPeriodBox>
          나에 대한 간단한 소개와 내가 가지고 있는 Skill을 보여주고 있습니다.
          또한, <br />
          지금까지 만들었던 Project의 정보들을 보여주고 있습니다.
        </StPeriodBox>

        <div style={{ height: "100px" }}></div>
      </StEzip>
    </>
  );
};

export default Person;

const StEzip = styled.div`
  margin: auto;
  width: 80%;
  height: 100%;
  .Ezip {
    color: white;
    margin: 0 0 30px 20px;
    font-size: 28px;
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
    width: 140px;
    cursor: pointer;
  }
`;

const StTech = styled.div`
  color: white;
  font-size: 28px;
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
