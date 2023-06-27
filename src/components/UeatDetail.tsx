import React from "react";
import styled from "styled-components";

const UeatDetail = () => {
  return (
    <>
      <StPeriodBox>
        <h3>🧐 formData 활용</h3>
        1. 원인
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. 제출할 양식 내부에 image와 category를 보내야 하는
        문제
        <br />
        <br />
        2. 해결 과정
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;a. <div className="small">Base64 </div> : 이미지나
        파일과 같은 이진 데이터를 ASCII 텍스트로 인코딩하는 방법
        <div style={{ height: "8px" }} />
        &nbsp;&nbsp;&nbsp;b. <div className="small">formData </div> : 키-값 쌍
        세트로 HTTP 요청의 일부로 양식 데이터를 구성하고 서버에 보낼 수 있는
        JavaScript 객체
        <br />
        <br />
        3. 해결
        <br />
        &nbsp;&nbsp;&nbsp;a. 기존의 Base64 를 통해서 전송하기 어려운 카테고리
        파일 내용의 이진 데이터를 처리할 수 없어{" "}
        <div className="small">formData</div>를 활용
      </StPeriodBox>
    </>
  );
};

export default UeatDetail;

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
