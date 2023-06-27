import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import UeatDetail from "src/components/UeatDetail";

const Ueat = () => {
  return (
    <>
      <StEzip>
        <div className="Ezip"> Ai Chat </div>

        <StPeriod>
          <div className="Time">✅ 개발 기간 : 22. 12.17 ~ 22. 12. 23 </div>
          <br />
          <div
            className="Link"
            onClick={() =>
              window.open("https://github.com/jominuk/Mini_Project-Ueat")
            }
          >
            Github 바로가기
          </div>

          <ReactPlayer
            url="img/ueatlodin.mp4"
            width="400px"
            height="280px"
            muted={true}
            playing={true}
            loop={true}
          />
          <div className="Link2">
            * 현재 서버가 종료되어 영상으로 보여드립니다.
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
            src="https://img.shields.io/badge/Redux-toolkit -3178C6?style=plastic&logo=Redux-toolkit &logoColor=white"
            alt="Redux-toolkit "
            className="LogoImage"
          />
          <img
            src="https://img.shields.io/badge/Styled-components-DB7093?style=plastic&logo=Styled-components&logoColor=white"
            alt="Styled-components"
            className="LogoImage"
          />
        </StPeriodBox>

        <StTech> 😎 맡은 주요 업무 </StTech>

        <StPart>
          <img
            alt="mainUeat"
            src={require("../image/mainUeat.png")}
            className="loginimg"
          />
          <img
            alt="postlist"
            src={require("../image/postlist.png")}
            className="loginimg"
          />
          {/* <StCon>
            <div className="BigTitle">🏠 로그인 페이지 </div>
            <div> 🗼 카카오 로그인을 통해 유저의 피로도를 낮춤 </div>
          </StCon> */}
        </StPart>

        <StTech> 🔥핵심 경험 </StTech>

        <StExperience>
          <div className="experience">
            ◻ Redux-toolkit 을 통한 Mini Project 개발👍
            <br />
            &nbsp;&nbsp; ◻ createSlice 함수를 사용하여 더 간결하고 가독성 좋은
            작업이 가능
            <br />
            <br />
            ◻ 협업의 중요성👍
            <br />
            &nbsp;&nbsp; ◻ 서로간의 소통을 하면서 다양한 자원과 지식이 공유가
            되어 혁신적이고 창의적인 의견을 수립하기에 중요
            <br />
            &nbsp;&nbsp; ◻ 개인의 작업보단 공동 작업을 통한 더 많은 정보를
            성취할 수 있기에 중요
            <br />
            &nbsp;&nbsp; ◻ 다양한 문제에 대해서 협업을 통해 해결책을 찾는데 도움
          </div>
        </StExperience>

        <StTech> 🪡 트러블 슈팅 </StTech>

        <UeatDetail />

        <div style={{ height: "100px" }}></div>
      </StEzip>
    </>
  );
};

export default Ueat;

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
    color: pink;
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

const StPart = styled.div`
  display: flex;
  margin-top: 25px;

  .loginimg {
    width: 400px;
    height: 280px;
    margin-left: 20px;
    border-radius: 15px;
  }
`;
