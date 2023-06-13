import React from "react";
import styled from "styled-components";

const Skill = () => {
  return (
    <>
      <StTodoContainer>
        <StJava alt="JS" src={require("../image/JS.png")} />
        <StTitle> JavaScript </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="TS" src={require("../image/TS.png")} />
        <StTitle> TypeScript </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="HTML5,CSS3" src={require("../image/HTML5,CSS3.png")} />
        <StTitle> HTML5, CSS3 </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="React" src={require("../image/React.png")} />
        <StTitle> React </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="Redux" src={require("../image/Redux.png")} />
        <StTitle> Redux </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="React-Query" src={require("../image/React-Query.png")} />
        <StTitle> React-Query </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="SWR" src={require("../image/SWR.png")} />
        <StTitle> SWR </StTitle>
      </StTodoContainer>

      <StTodoContainer>
        <StJava alt="Socket-io" src={require("../image/Socket-io.png")} />
        <StTitle> Socket-io </StTitle>
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
  margin-top: 15px;
  background-color: rgba(183, 244, 242, 0.2);
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

const StJava = styled.img`
  margin-left: 10px;
`;

const StTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-left: 20px;
`;
