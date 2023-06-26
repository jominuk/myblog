import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const gitHandleClick = useCallback(() => {
    window.open("https://github.com/jominuk");
  }, []);

  const tHandleClick = useCallback(() => {
    window.open("https://minuk22.tistory.com/");
  }, []);

  const pageMove = useCallback(() => {
    navigate("");
  }, [navigate]);

  const pageProject = useCallback(() => {
    navigate("project");
  }, [navigate]);

  const pageIntro = useCallback(() => {
    navigate("introduce");
  }, [navigate]);

  const handleButtonClick = useCallback((buttonName: any) => {
    setActiveButton(buttonName);
  }, []);

  return (
    <>
      <StContainer>
        <h2>&nbsp;&nbsp;Portfolio &nbsp;🙋‍♂️</h2>
        <div>
          <StButton>
            <img
              alt="git"
              src={require("../image/git.jpg")}
              onClick={gitHandleClick}
            />
          </StButton>

          <StButton>
            <img
              alt="Tstory"
              src={require("../image/Tstory.png")}
              onClick={tHandleClick}
            />
          </StButton>
        </div>
      </StContainer>

      <StTitleContainer>
        <StTitleButton
          onClick={() => {
            pageMove();
            handleButtonClick("skill");
          }}
          className={activeButton === "skill" ? "active" : ""}
        >
          Skill
        </StTitleButton>

        <StTitleButton
          onClick={() => {
            pageProject();
            handleButtonClick("projects");
          }}
          className={activeButton === "projects" ? "active" : ""}
        >
          Projects
        </StTitleButton>

        <StTitleButton
          onClick={() => {
            pageIntro();
            handleButtonClick("introduce");
          }}
          className={activeButton === "introduce" ? "active" : ""}
        >
          Introduce
        </StTitleButton>
      </StTitleContainer>
    </>
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
  border-bottom: 2px solid white;
  color: white;
`;

const StButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

const StTitleContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  color: white;
  margin-bottom: 50px;
`;

const StTitleButton = styled.button`
  margin: 0 40px 0 40px;
  position: relative;
  font-size: 18px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform: scale(1.3);
  }
  &.active {
    color: white;
  }
`;
