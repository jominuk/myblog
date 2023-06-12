import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <h2>나만의 TodoList 😋</h2>
      <StButton>
        <StImg alt="git" src={require("../image/git.jpg")}></StImg>
      </StButton>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0px 20px;
  border-radius: 10px;
  border-bottom: 3px solid white;
  color: white;
`;

const StButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StImg = styled.img``;
