import React from "react";
import styled from "styled-components";

const AiDetail = () => {
  return (
    <>
      <StPeriodBox>
        <h3>🧐 채팅을 위한 구성 </h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. "chat-GPT와 같은 채팅 형식의 구성을 위해 어떻게 할
        수 있을까?" 의 문제
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. inputValue는 "me"로 Ai 답변은 "ai"로 구분하여 로직
        구상
        <br />
        <br />
        3. 해결
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 반환된 결과값에서 sender라는 함수 명을 만들고
        styled를 활용해
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <code className="code">
          {
            'justify-content: ${({ sender }) => sender === "me" ? "flex-end" : "flex-start"};'
          }
        </code>{" "}
        와 같은 3항 연산을 활용해 채팅을 구현
        <div style={{ height: "8px" }} />
      </StPeriodBox>

      <StPeriodBox>
        <h3>🧐 다크모드 상태관리 및 상태유지 </h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 각 페이지마다 다크모드를 적용하기 위한 Prop를
        사용하게 되면 props drilling 문제로 인해 코드 양이 많아 질 경우
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 추적하기 힘들어짐을 판단
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. 테마 변경 후 페이지 이동 시 상태가 유지 되지 않는
        문제
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 전역 상태 관리 라이브러리인{" "}
        <div className="small">redux-toolkit, context api </div>
        두 가지 라이브러리 중에서 판단
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !.{" "}
        <div className="small">redux-toolkit</div> : 큰 상태 트리가 있는 복잡한
        애플리케이션이 있는 경우 적합
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!.{" "}
        <div className="small">context api</div> : 애플리케이션이 더 작거나 구성
        요소가 제한된 경우에 적합
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. 테마 상태 유지를 위한 상태 관리 라이브러리를 사용할
        수 도 있지만 간단하고 쉽게 접근가능한
        <div className="small"> localStorage </div> 에 보관
        <br />
        <br />
        3. 해결
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 현 프로젝트에 맞는 작은 규모이며 전역 상태 관리
        역시 두가지 테마를 적용하기에 간소화를 위한
        <div className="small"> context api </div>를 사용
        <br />
        <img
          alt="false"
          src={require("../image/false.png")}
          className="loginimg"
        />
        <br />
        &nbsp;&nbsp;&nbsp;b. <div className="small"> localStorage </div> 에
        저장함으로 써 편리하게 상태 유지 관리
        <div style={{ height: "8px" }} />
      </StPeriodBox>
    </>
  );
};

export default AiDetail;

const StPeriodBox = styled.div`
  margin-top: 30px;
  min-width: 930px;
  background-color: rgba(255, 113, 175, 0.2);
  padding: 10px 0 30px 30px;
  border-radius: 20px;
  color: white;

  .small {
    display: inline;
    color: #03bf8a;
    font-weight: 800;
  }
  .loginimg {
    width: 400px;
    height: 280px;
    margin: 10px 0 10px 40px;
  }

  .code {
    font-weight: 800;
    color: #03bf8a;
  }
`;
