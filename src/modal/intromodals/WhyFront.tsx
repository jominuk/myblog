import React, { FC, useCallback } from "react";
import styled from "styled-components";

const WhyFront: FC<any> = ({ 왜개발자 }) => {
  const closeModal = useCallback(() => {
    왜개발자(false);
  }, []);

  return (
    <ModalBackdrop>
      <StContainer>
        <StCloseBut onClick={closeModal}>❌</StCloseBut>
        <StSpan>
          개발자를 저의 최종의 목표로 선정했던 계기는 카페를 운영해오면서
          시작되었습니다. 제가 만들던 베이커리와 케이크를 주문 받고 홍보 하고
          싶은 생각에 홈페이지를 만들어보자는 생각을 가지게 되었습니다. 우연히
          사이트 견적을 받아봤을 땐 이미 제가 생각했던 금액보다 더 많은 금액을
          지불 해야 했습니다. 그 때부터 홈페이지 개발 등 검색을 통해 알아보던
          중에 코딩 교육, 프론트엔드, 백엔드를 보게 되었습니다. 이 순간 저에게
          기회를 주었다고 생각했습니다. 머리 속에 든 생각은 “카페 사이트를
          만들게 아니라 내 미래를 책임질 직업으로 해야겠다” 하는 생각을
          했습니다. 사실 이전의 저는 총 3번의 커리어를 전환한 방황했던
          청춘이였습니다. 기계 설계, 3D프린터, 카페 등 전혀 연결 고리가
          없었습니다. 하지만 방황하면서도 꼭 하고 싶은 일이 있었습니다. 바로 4차
          산업 관련된 하고 싶었습니다. 드론 운영 자격증도 공부해보면서 실제
          드론을 구매하면서 까지 열정이 있었습니다. 개발자라는 직업은 4차 산업의
          중심이라 생각을 했고 저를 성장할 수 있게, 배움의 즐거움을 느낄 수 있게
          할 것이라고 생각했습니다. 또한 지금도 “이런 서비스를 만들었으면
          좋겠다”하는 제 아이디어를 기록하면서 웹 사이트를 만들고 싶은 목표가
          있습니다. 그렇기에 저는 쉽지 않은 결정에 사업을 그만두면서 까지 더욱
          열정에 불타올라 저의 마지막 목표를 가지게 되었습니다.
        </StSpan>
      </StContainer>
    </ModalBackdrop>
  );
};

export default WhyFront;

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
  width: 600px;
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
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;

const StCloseBut = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const StSpan = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  width: 530px;
  height: 400px;
  margin: auto;
  margin-top: 32px;
`;
