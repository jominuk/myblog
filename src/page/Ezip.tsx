import React, { useCallback } from "react";
import styled from "styled-components";

const Ezip = () => {
  const windowOpen = useCallback(() => {
    window.open("https://github.com/jominuk/Final_Project-ezip");
  }, []);

  const EzipOpen = useCallback(() => {
    window.open("https://www.ezip.store/");
  }, []);

  return (
    <>
      <StEzip>
        <div className="Ezip"> 이집은 : ezip</div>

        <StPeriod>
          <div className="Time"> 개발 기간 : 22. 12. 24 ~ 23. 02. 10 </div>
          <br />
          <div className="Link" onClick={windowOpen}>
            Github 바로가기
          </div>
          <br />
          <div className="Link2" onClick={EzipOpen}>
            ezip 바로가기
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
            src="https://img.shields.io/badge/Redux-toolkit-764ABC?style=plastic&logo=Redux-toolkit&logoColor=white"
            alt="Resux-Toolkit"
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/React-Query-FF4154?style=plastic&logo=React-Query&logoColor=white"
            alt="React-Query"
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/Styled-components-DB7093?style=plastic&logo=Styled-components&logoColor=white"
            alt="Styled-components"
            className="LogoImage"
          />
        </StPeriodBox>

        <StTech> 주요 업무 </StTech>
        <StPart>
          <img
            alt="ezip"
            src={require("../ezipimage/kakaoLoginImage.png")}
            className="loginimg"
          />

          <div> 여기는 상세 내용 </div>
        </StPart>
        <StPart>
          <img
            alt="ezip"
            src={require("../ezipimage/kakaoLoginImage.png")}
            className="loginimg"
          />

          <div> 여기는 상세 내용 </div>
        </StPart>
      </StEzip>
    </>
  );
};

export default Ezip;

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
    color: white;
    border-bottom: 1px solid powderblue;
    width: 100px;
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

const StPart = styled.div`
  display: flex;

  .loginimg {
    width: 350px;
    height: 230px;
    border-radius: 20px;
  }
`;
