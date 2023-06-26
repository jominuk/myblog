import React from "react";
import styled from "styled-components";

const SlackDetail = () => {
  return (
    <>
      <StPeriodBox>
        <h3>🧐 Optimistic UI </h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 첫 로그인 이 후 API 요청을 한 뒤 또 같은 요청을
        보내고 있던 문제
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. Socket.io로 채팅을 구현한 뒤 채팅 입력 후 화면에
        표시될 때 응답 받는 시간 때문에 채팅 지연 문제로
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 유저들의 사용성을 저해함
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. <div className="small">revalidate </div> : SWR이
        서버에 요청을 보내 데이터를 다시 가져오는데 사용
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. <div className="small">mutate </div> : 서버에
        요청을 보내지 않고 SWR의 캐시 데이터를 직접 수정하는 데 사용
        <br />
        <br />
        3. 해결
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. <div className="small">"revalidate"</div> 의 활용은
        특정 버튼 클릭이나 양식 제출과 같은 사용자 작업에 대한 응답일 때 사용
        <br />
        &nbsp;&nbsp;&nbsp;b. <div className="small">"mutate"</div> 의 활용은
        Socket을 활용해 특정 유저의 정보들을 캐시된 데이터로 즉시 업데이트 할 때
        사용
      </StPeriodBox>

      <StPeriodBox>
        <h3>🧐 useSWRInfinite의 2차원 배열 </h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 현재 보여지는 데이터에서 스크롤이 상단에 위치 했을
        때 추가 데이터를 불러오면서 에러가 표시 되는 현상
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 기존의 useSWR을 사용하게 된다면
        <div className="small">
          1차원 배열인 [&#123;id:1&#125;, &#123;id:2&#125;, &#123;id:3&#125;]
        </div>{" "}
        이와 같은 구조를 띄우지만 useSWRInfinite를 사용
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이 후 1차원 배열에서 2차원 배열로 data가
        바뀌는 현상이 생김
        <br />
        <br />
        3. 해결
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 기존의
        <div className="small">
          [&#123;id:1&#125;, &#123;id:2&#125;, &#123;id:3&#125;]
        </div>
        이와 같은 1차원 배열에서 페이지 별로 받아올 수 있게 2차원 배열인
        <div className="small">
          [&#123;id:1&#125;, &#123;id:2&#125;, &#123;id:3&#125;]
        </div>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 상태로 받아올 수 있게 로직 수정
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. <div className="small">flat( ) </div> 함수를 사용해
        기존의 Spread연산자인 …data를 data.flat( )로 수정해 중첩 배열을 평탄화
      </StPeriodBox>

      <StPeriodBox>
        <h3>🧐 Socket </h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 하나의 방에서 채팅을 하고 난 뒤 다른 방에서 채팅을
        하게 되면 처음 채팅했던 방에서도 내가 쓴 글이 나타나는 문제
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. 채팅은 올바르게 입력되고 있지만 서버 쪽으로 data를
        보내지 못하고 있던 문제
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;c. 연결 과정에서 네트워크 창에
        <div className="small">polling</div> 에러를 보내고 있는 문제
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 연결을 끊는 과정에서 기존에 방에 있던 data들이
        존재하고 있는게 보여 이 부분을 정리해주는 로직이 필요
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. socket.io가 연결이 되어 있다면
        <div className="small">sendBuffer</div>와
        <div className="small">receiveBuffer</div>의 내부 배열이 비어있어야
        data를 보낼 수 있음을 발견
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;c. 구 버전의 Explorer은 websocket이 없는 브라우저가
        존재해 그렇기 위해 먼저 http 요청을 보내고 있는 것을 발견
        <br />
        <br />
        3. 해결
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. sockets으로 만든 함수에 객체를 만들고 delete를
        활용해 정리하고 이 후 <div className="small">disconnect( )</div>을
        활용해
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 기존의 공간과 연결을 끊어 줌으로 해결
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. back서버와 front서버와의
        <div className="small">소켓.io의 버전을 동일</div>하게 맞춤으로 해결
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;c. 현재 사용하고 있는 크롬 버전에는 websocket을 바로
        사용할 수 있기에 polling를 하지 않고
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="small">transports: ['websocket'] </div>사용해서 http를
        거치지 않고 websocket을 사용할 수 있게 로직 수정 후 문제 해결
      </StPeriodBox>
    </>
  );
};

export default SlackDetail;

const StPeriodBox = styled.div`
  margin-top: 30px;
  min-width: 900px;
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
`;
