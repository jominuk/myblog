import React from "react";
import styled from "styled-components";

const EzipDetail = () => {
  return (
    <>
      <StPeriodBox>
        <h3>🧐 useEffect "안녕"</h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. "기존의 redux-toolkit에선 렌더링과 데이터 업데이트
        형식에 <div className="small">useEffect</div>를 사용했지만
        react-Query에서는
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;어떤 함수로 새로운 데이터를
        업데이트 할 수 있을까?" 문제
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. <div className="small">refetchQueries</div> : React
        Query 캐시에 캐싱된 하나 이상의 쿼리에 대한 새로운 데이터를 가져오는데
        사용
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. <div className="small">invalidateQueries</div> :
        하나 이상의 쿼리를 steal 로 표시하는데 사용 즉, 캐시의 데이터가 더 이상
        최신 상태가 아닌 것을 간주
        <br />
        <br />
        3. 해결
        <br />
        &nbsp;&nbsp;&nbsp;a. <div className="small">refetchQueries</div>를
        사용하게 되면 너무 많은 랜더링을 유발할 수 있기에 프로젝트의 최적화를
        떨어뜨려
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;적당하지 않다는 생각에
        invalidateQueries를 사용하여 최신 업데이트를 반영
      </StPeriodBox>

      <StPeriodBox>
        <h3>🧐 useInfiniteQuery와 Intersection observer API</h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 페이지 진입과 동시에 모든 데이터를 get하는 현상으로
        로딩시간 지연
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. <div className="small">Pagination </div>
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !. 장점 : 유저 의도에 맞게 페이지
        이동 가능
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!. 단점 : 유저가 버튼 클릭의
        추가적인 작업(액션)이 필요
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. <div className="small">Infinite Scroll</div>
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !. 장점 : 스크롤 하나로 많은 양의
        데이터를 자연스럽게 보여줌으로써 사용자 이탈을 막을 수 있음
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!. 단점 : 특정한 데이터를 다시
        찾기 어려움
        <br />
        <br />
        3. 해결
        <br />
        &nbsp;&nbsp;&nbsp;a. <div className="small">InfiniteScroll</div>을
        사용해 유저에게 자연스러운 데이터를 만날 수 있게 구현
        <br />
        &nbsp;&nbsp;&nbsp;b.{" "}
        <div className="small">intersection observer API</div>를 사용해 변화를
        관찰하고 스크롤 시 지정된 데이터를 요청해 렌더링
      </StPeriodBox>

      <StPeriodBox>
        <h3>🧐 성능을 위한 최적화 </h3>
        1. 원인
        <div style={{ height: "8px" }} />
        <img
          alt="post"
          src={require("../image/post.png")}
          className="loginimg"
        />
        <br />
        &nbsp;&nbsp;&nbsp;a. 사용하지 않는 JS와 PNG로 사용하던 Image들, 사용하지
        않는 컴포넌트들의 리랜더링 등 성능이 떨어짐을 판단
        <br />
        <br />
        2. 해결
        <div style={{ height: "8px" }} />
        <img
          alt="post"
          src={require("../image/resovle.png")}
          className="loginimg"
        />
        <br />
        &nbsp;&nbsp;&nbsp;a. 불필요한 리랜더링에는 React.memo를 사용하고, 재
        사용되고 있는 함수들에게는 useCallback과 useMemo를 사용
        <br />
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. 재사용이 가능한 기능들은 컴포넌트화 하여 정리
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;c. 검색기능의 text를 입력할 때 state 값이 바뀌며,
        리랜더링을 유발하는데 이 때 debounce함수가 재 생성 됨,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 결론 useCallback로 함수의 재 생성을 막음
      </StPeriodBox>
    </>
  );
};

export default EzipDetail;

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
`;
