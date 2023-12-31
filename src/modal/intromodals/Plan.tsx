import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  onCloseModal: () => void;
}

const Plan: FC<Props> = ({ onCloseModal }) => {
  return (
    <ModalBackdrop onClick={onCloseModal}>
      <StContainer onClick={(e) => e.stopPropagation()}>
        <StCloseBut onClick={onCloseModal}>❌</StCloseBut>
        <StLeft>
          <StSpan>
            앞으로의 시간 동안 벽돌을 쌓을 예정입니다.
            <br />
            <br />
            지금까지 진도 빼기 급급해 조금씩 이해하고 넘어갔던 내용들을 지금은
            튼튼한 벽돌을 쌓아야 한다고 생각했습니다.
            <br />
            <br />
            그렇기에 지금까지 놓쳤던, 이해가 안되었던 부분들을 채워나가며 튼튼한
            기초를 만들 계획입니다.
            <br />
            <br />
            그러기 위해선 React의 Hook과 개념적인 요소들, JS의 기초 들을
            공부하면서 단단한 기초를 만들려고 합니다.
          </StSpan>
        </StLeft>
        <StRigth>
          <StSpan>
            또한 React의 중요한 재사용성이 높은 Component를 연습하면서 좋은
            코드를 위해 끊임 없이 연구 하고 생각한 이후
            <br />
            <br /> 강력한 생태계를 가지고 있는 Typescript를 공부해 저 혼자만의
            프로젝트에 적용해 보면서 실습을 이어나가 실전에도 도움이 될 수 있게
            공부할 계획입니다.
          </StSpan>
        </StRigth>
      </StContainer>
    </ModalBackdrop>
  );
};

export default Plan;

const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

const StContainer = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  /* 최상단 위치 */
  z-index: 10;
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 모달창 디자인 */
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;
`;

const StCloseBut = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: #e5e5e5;
  color: white;
  cursor: pointer;
`;

const StLeft = styled.div`
  background-color: #e5e5e5;
  width: 50%;
  border-radius: 10px 50px 50px 10px;
  border-right: 2px solid black;
`;

const StRigth = styled.div`
  background-color: #e5e5e5;
  width: 50%;
  border-radius: 50px 10px 10px 50px;
  border-left: 2px solid black;
`;

const StSpan = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 70%;
  color: black;
  font-size: 16px;
  font-weight: 900;
`;
