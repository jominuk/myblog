import React, { FC } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { skilldata } from "src/type/type";
import EzipDetail from "src/components/EzipDetail";

const Ezip: FC<skilldata> = () => {
  return (
    <>
      <StEzip>
        <div className="Ezip"> 이집은 : ezip</div>

        <StPeriod>
          <div className="Time"> ✅ 개발 기간 : 22. 12. 24 ~ 23. 02. 10 </div>
          <br />
          <div
            className="Link"
            onClick={() => {
              window.open("https://github.com/jominuk/Final_Project-ezip");
            }}
          >
            Github 바로가기
          </div>
          <br />
          <div
            className="Link2"
            onClick={() => {
              window.open("https://www.ezip.store/");
            }}
          >
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

        <StTech> 😎 맡은 주요 업무 </StTech>

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
            url="img/review.mp4"
            width="400px"
            height="280px"
            muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
            playing={true}
            loop={true}
          />
          <StCon>
            <div className="BigTitle">🏠 Review 페이지 </div>
            <div>
              🗼 내가 지낸 이집은 후기를 솔직하게 담을 수 있는 page 제공
            </div>
          </StCon>
        </StPart>

        <StPart>
          <ReactPlayer
            url="img/mypage.mp4"
            width="400px"
            height="280px"
            muted={true}
            playing={true}
            loop={true}
          />
          <StCon>
            <div className="BigTitle">🏠 MyPage 페이지 </div>
            <div>
              🗼 내가 쓴 후기와, 게시물을 한눈에 확인 할 수 있는 page 제공
            </div>
          </StCon>
        </StPart>

        <StTech> 🔥 핵심 경험 </StTech>

        <StExperience>
          <div className="experience">
            ◻ Redux-toolkit을 사용한 미니, 클론 프로젝트 개발👍
            <br />
            &nbsp;&nbsp; ◻ 전역 상태 관리 라이브러리로써 Redux를 사용할 환경을
            구축하는 보일러플레이트(상용구) 작성 등의 과정이 생략이
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 가능하기에 사용
            <br />
            <br />
            ◻ React-Query 를 이용한 프로젝트 개발 👍
            <br />
            &nbsp;&nbsp; ◻ 서버 사이드의 상태를 보다 용이하게 관리하기 위해 사용
            <br />
            &nbsp;&nbsp; ◻ 캐싱 된 데이터를 사용해 데이터 업데이트를 빠르게
            보여줄 수 있으며 서버에 부담도 줄일 수 있다는 장점
            <br />
            <br />
            ◻ React-Query의 장점 infiniteQuery 사용 👍
            <br />
            &nbsp;&nbsp; ◻ 일정한 데이터를 순차적으로 보여주기 위함
            <br />
            &nbsp;&nbsp; ◻ 데이터의 일부만 먼저 렌더링하고 차례로 보여줌으로써
            최적화와 유저의 로딩 시간을 개선
            <br />
            <br />
            ◻ 고객 피드백을 반영한 UX 개선 👍
            <br />
            &nbsp;&nbsp; ◻ Private Routes를 활용해 로그인이 필요한 페이지에서
            강제진입 또는 뒤로가는 현상에서 특정 액션을 취할 수 있게 해결
            <br />
            &nbsp;&nbsp; ◻ useLocation을 활용해 하단스크롤 화면에서 페이지 이동
            시 상단 스크롤로 이동 해결
          </div>
        </StExperience>

        <StTech> 🪡 트러블 슈팅 </StTech>

        <EzipDetail />

        <div style={{ height: "70px" }} />
      </StEzip>
    </>
  );
};

export default Ezip;

const StEzip = styled.div`
  margin: auto;
  width: 80%;
  min-width: 850px;
  height: 100%;

  .Ezip {
    color: white;
    margin: 0 0 30px 20px;
    font-size: 25px;
    min-width: 850px;
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

  .small {
    display: inline;
    color: #03bf8a;
    font-weight: 800;
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

const StExperience = styled.div`
  background-color: rgba(255, 113, 175, 0.2);
  padding: 30px;
  min-width: 850px;
  border-radius: 20px;
  margin-top: 20px;

  .experience {
    color: white;
    font-size: 15px;
  }
`;
