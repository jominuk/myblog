import React, { useCallback } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

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
          <StCon>
            <div className="BigTitle">🏠 로그인 페이지 </div>
            <div> 🗼 카카오 로그인을 통해 유저의 피로도를 낮춤 </div>
          </StCon>
        </StPart>

        <StPart>
          <img
            alt="community"
            src={require("../ezipimage/community.png")}
            className="loginimg"
          />
          <StCon>
            <div className="BigTitle">🏠 Community 페이지 </div>
            <div> 🗼 게시판을 이용해 자유로운 대화 제공</div>
            <div> 🗼 솔직 담백한 다양한 정보 소통 제공 </div>
          </StCon>
        </StPart>

        <StPart>
          <ReactPlayer
            // alt="review"
            // src={require("../ezipimage/review.mp4")}
            url="img/review.mp4"
            className="loginimg"
            width="400px"
            height="280px"
            muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
            playing={true}
            loop={true}
          />
          <StCon>
            <div className="BigTitle">🏠 Review 페이지 </div>
            <div>
              {" "}
              🗼 내가 지낸 이집은 후기를 솔직하게 담을 수 있는 page 제공
            </div>
          </StCon>
        </StPart>
        <div style={{ height: "70px" }} />
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
  margin-top: 25px;

  .loginimg {
    width: 400px;
    height: 280px;
  }
`;

const StCon = styled.div`
  width: 50%;
  height: 150px;
  margin: auto;
  color: white;

  .BigTitle {
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 40px;
  }
`;
