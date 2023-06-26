import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { skilldata } from "src/type/type";

const Project: FC<skilldata> = () => {
  const navigate = useNavigate();

  return (
    <>
      <StProject>
        <StImg
          alt="ezip"
          src={require("../image/ezip.png")}
          onClick={() => {
            navigate("/ezip");
          }}
        />

        <StContent>
          <StTitle>
            <img
              className="logo"
              alt="ezip"
              src={require("../image/eziplogo.png")}
            />
            ezip : 이집은
          </StTitle>
          <StLine />
          <StCont>
            ☝️실제 거주 해 본 사람들이 작성하는 찐 리뷰 플렛폼
            <br />
            <br />
            ✌️집주인도, 중개사도 모르는 진짜 후기를 알려주는
            <br />
            &nbsp; &nbsp; 플렛폼
          </StCont>
        </StContent>
      </StProject>

      <StProject>
        <StImg
          alt="slack"
          src={require("../image/slack.png")}
          onClick={() => {
            navigate("/slack");
          }}
        />

        <StContent>
          <StTitle>
            <img
              className="logo"
              alt="슬랙"
              src={require("../image/슬랙.png")}
            />
            Slack
          </StTitle>
          <StLine />
          <StCont>
            ☝️ Clone-Project를 통한 Typescript 활용
            <br />
            <br />
            ✌️ Slack을 통해 SWR, socket.io 라이브러리 사용 경험
          </StCont>
        </StContent>
      </StProject>

      <StProject>
        <StImg
          alt="ChatAi"
          src={require("../image/ChatAi.png")}
          onClick={() => {
            navigate("/ai");
          }}
        />

        <StContent>
          <StTitle> Ai Chat </StTitle>
          <StLine />
          <StCont>☝️ Open Ai를 활용한 Chat 개발 경험</StCont>
        </StContent>
      </StProject>

      <StProject>
        <StImg
          alt="solo"
          src={require("../image/solo.png")}
          onClick={() => {
            navigate("/person");
          }}
        />

        <StContent>
          <StTitle>개인 웹 포트폴리오</StTitle>
          <StLine />
          <StCont>☝️ 개인 웹 포트폴리오 개발</StCont>
        </StContent>
      </StProject>

      <div style={{ height: "50px" }} />
    </>
  );
};

export default Project;

const StProject = styled.div`
  display: flex;
  margin: auto;
  margin-top: 30px;
  width: 80%;
`;

const StImg = styled.img`
  width: 400px;
  height: 280px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

const StContent = styled.div`
  width: 430px;
  height: 250px;
  margin: auto;
`;

const StTitle = styled.h1`
  display: flex;
  color: wheat;
  margin: 0 0 0 50px;

  .logo {
    width: 50px;
    margin-right: 40px;
  }
`;

const StLine = styled.div`
  border-bottom: 1px solid white;
  margin-top: 20px;
`;

const StCont = styled.div`
  color: white;
  margin-top: 50px;
`;
