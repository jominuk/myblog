import React, { useState } from "react";
import styled from "styled-components";
import { skilldata } from "src/type/type";
import SkillModal from "src/components/SkillModal";

const Skill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContainerClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StTodoContainer onClick={handleContainerClick}>
        <StConten>
          <StJava alt="JS" src={require("../image/JS.png")} />
          <StTitle>JavaScript</StTitle>
        </StConten>
        <StContents>
          JS는 웹 애플리케이션 구축을 위한 기본 언어이며, 단일 스레드 언어로 ES6
          문법을 이해하고 있습니다.
        </StContents>
      </StTodoContainer>

      {isModalOpen && <SkillModal setIsModalOpen={setIsModalOpen} />}

      <StTodoContainer>
        <StConten>
          <StJava alt="TS" src={require("../image/TS.png")} />
          <StTitle>TypeScript</StTitle>
        </StConten>
        <StContents>
          JS의 상위 집합으로 JS의 모든 기능을 포함하면서 정적 타입을 지원합니다
        </StContents>
      </StTodoContainer>

      <StTodoContainer>
        <StConten>
          <StJava alt="React" src={require("../image/React.png")} />
          <StTitle>React</StTitle>
        </StConten>
        <StContents>
          사용자 UI를 구축하는데 사용되는 큰 JS 라이브러리이며, Virtual DOM의
          렌더링을 이해하고 있습니다.
        </StContents>
      </StTodoContainer>

      <StTodoContainer>
        <StConten>
          <StJava alt="Redux" src={require("../image/Redux.png")} />
          <StTitle>Redux</StTitle>
        </StConten>
        <StContents>
          React와 함께 사용되는 전역 상태 관리 라이브러리이며, redux를 이용하여
          상태를 효육적으로 관리 할 수 있습니다.
        </StContents>
      </StTodoContainer>

      <StTodoContainer>
        <StConten>
          <StJava alt="React-Query" src={require("../image/React-Query.png")} />
          <StTitle>React-Query</StTitle>
        </StConten>
        <StContents>
          캐싱 및 자동 데이터 동기화를 통해 즉시 사용 가능한 캐싱 메커니즘을
          이해하고 있습니다.
        </StContents>
      </StTodoContainer>

      <StTodoContainer>
        <StConten>
          <StJava alt="SWR" src={require("../image/SWR.png")} />
          <StTitle>SWR</StTitle>
        </StConten>
        <StContents>
          React-Query와 매우 유사하지만, 작은 프로젝트에 적합하고 낙관적 UI
          업데이트 가능합니다.
        </StContents>
      </StTodoContainer>

      <StTodoContainer>
        <StConten>
          <StJava alt="Socket-io" src={require("../image/Socket-io.png")} />
          <StTitle>Socket-io</StTitle>
        </StConten>
        <StContents>
          서버와 클라이언트 간의 실시간 양방향 통신 가능하게하는 JS
          라이브러리로써, 실시간 통신을 위함에 사용했습니다.
        </StContents>
      </StTodoContainer>
    </>
  );
};

export default Skill;

const StTodoContainer = styled.button`
  display: flex;
  align-items: center;
  width: 80%;
  height: 7vh;
  border-radius: 12px;
  margin: auto;
  margin-top: 20px;
  background-color: rgba(183, 244, 242, 0.2);
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s;
  }
`;

const StConten = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const StJava = styled.img`
  margin-left: 10px;
`;

const StTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-left: 20px;
`;

const StContents = styled.div`
  font-size: 13px;
  margin-left: 15px;
`;
