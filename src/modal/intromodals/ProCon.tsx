import React, { FC, useCallback } from "react";
import styled from "styled-components";

interface Props {
  onCloseModal: () => void;
}

const ProCon: FC<Props> = ({ onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <ModalBackdrop onClick={onCloseModal}>
      <StContainer onClick={stopPropagation}>
        <StCloseBut onClick={onCloseModal}>❌</StCloseBut>
        <StLeft>
          <StSpan>
            장점
            <br />
            <br />
            열정과 추진력, 커뮤니케이션이 있습니다.
            <br />
            열정과 추진력이 있다면 개발자로서 중요한 **“해결할 수 있는 능력“**을
            가능하게 만든다고 생각합니다.
            <br />
            <br />
            저는 이미 사업을 통해서 사업 오픈 전 6개월 간 추진력 있게 준비한
            경험이 있으며, 2년 간 진행을 하면서 다른 사람과의 커뮤니케이션이
            더욱 발전 되었다고 생각합니다.
            <br />
            <br />
            그렇기에 개발자로써 협업의 중요성인 저의 장점이 부각될 수 있습니다.
          </StSpan>
        </StLeft>
        <StRigth>
          <StSpan>
            단점
            <br />
            <br />
            단점으로 이해력 이 부족했습니다.
            <br />
            저는 남들 보단 2배로 읽어야 하고 생각해야 하며 일해야 합니다.
            <br />
            생각하려고 하는 센스와 이해해야 하는 센스가 부족해 몇 번을 더 봐야
            하는 경우가 많습니다. 하지만 한 손가락에 꼽을 정도로 열심히 했던
            공부는 개발자였습니다. 그렇기에 열정으로 쏟아부어 이해력도 시간이
            해결해 주었습니다.
            <br />
            항상 배우려는 자세로 질문하며, 이해한 내용을 적어두고 다른 이들에게
            나누면서 저의 이해력을 끌어 올릴 수 있도록 노력하면서 단점을
            극복하려는 행동으로 보여주고 있습니다.
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
  display: flex;
  margin: auto;
  margin-top: 50px;
  width: 80%;
  color: black;
  font-size: 16px;
  font-weight: 900;
`;
