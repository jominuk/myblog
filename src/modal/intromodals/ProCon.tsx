import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  onCloseModal: () => void;
}

const ProCon: FC<Props> = ({ onCloseModal }) => {
  return (
    <ModalBackdrop onClick={onCloseModal}>
      <StContainer onClick={(e) => e.stopPropagation()}>
        <StCloseBut onClick={onCloseModal}>❌</StCloseBut>
        <StLeft>
          <StSpan>
            ◻ <div className="pro"> 장점</div>
            <br />
            <br />
            열정과 추진력, 커뮤니케이션이 있습니다.
            <br />
            열정과 추진력이 있다면 개발자로서 중요한 해결할 수 있는 능력을
            가능하게 만든다고 생각합니다.
            <br />
            <br />
            저는 이미 사업을 통해서 오픈 전 6개월 간 성실하게, 추진력 있게
            준비한 경험이 있으며, 2년 간 진행을 하면서 다른 사람과의
            커뮤니케이션이 더욱 발전 되었다고 생각합니다.
            <br />
            <br />
            그렇기에 개발자로써 협업의 중요성인 저의 장점이 부각될 수 있습니다.
          </StSpan>
        </StLeft>
        <StRigth>
          <StSpan>
            ◻ <div className="pro"> 단점 </div>
            <br />
            <br />
            단점으로 여러 문제를 동시에 효율적으로 처리할 수 있는 멀티태스킹
            능력에 아쉽게 느껴지고 있습니다.
            <br />
            <br />
            그래서 수많은 계획이 밀려올 때마다 빠르게 팬을 잡고 기록하는 습관을
            몸에 익혔습니다.
            <br />
            <br />
            특히 기록하면서 간과 하기 쉬운 부분을 하나하나 세심하게 살피고, 또한
            짧은 휴식을 위해 5분 정도 눈을 감고 생각 정리를 하면서 노력하고
            있습니다.
          </StSpan>
        </StRigth>
      </StContainer>
    </ModalBackdrop>
  );
};

export default ProCon;

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
  margin-top: 50px;
  width: 80%;
  color: black;
  font-size: 16px;
  font-weight: 900;

  .pro {
    display: inline;
    font-size: 18px;
  }
`;
