import React, { FC, useCallback } from "react";
import styled from "styled-components";

const LikeFront: FC<any> = ({ 좋은이유 }) => {
  const closeModal = useCallback(() => {
    좋은이유(false);
  }, []);

  return (
    <ModalBackdrop>
      <StContainer>
        <StCloseBut onClick={closeModal}>❌</StCloseBut>
        <StSpan>
          첫 시작은 검은 화면에서 무언가 작성하는 모습들 그것을 통해 사이트를
          그려주는 화려함, 개발자를 통해 4차 산업에 있어 더욱 더 가까워질 수
          있는 기대감 때문에 개발자를 좋아하게 된 이유였습니다. 하지만 지금은
          다른 생각을 가지게 되었습니다. 개발의 세계는 매우 빠른 속도로 트렌드가
          바뀌고 있습니다. 저는 그 트렌드에 맞춰 꾸준한 교육을 통해 배움의
          즐거움을 가지게 되었습니다. 그 전까지 업무에서 성취감과 보람감을
          느끼기 어려웠습니다. 눈에 보여지는 실력이 아닌 발전이 지지 부진 했던
          모습이 아쉽게 느꼈습니다. 하지만 지금은 “단순하게 돈을 버는 행위를
          넘어서 세상에 긍정적인 영향을 끼칠 수 있는 일”이라고 생각을 하기에
          개발자를 공부하면서 잠깐의 교육을 통해서도 제가 성장했다는 것을 느끼게
          해주었습니다. 또한 특별한 조직, 특별한 경험을 통해 한층 더 업그레이드
          된 커뮤니케이션을 배우게 되었습니다. 마음만 먹는다면 전세계 사람들과
          같은 관심사를 공유할 수 있고 함께 프로젝트를 진행 할 수도 있는 생각에
          열정도 불타올라 공부라는 것을 좋아하지 않았던 저에게 펜을 들게
          해주었습니다. 또한 처음부터 끝까지 무언가를 계획해서 만들어 낼 수
          있으며, 제가 상상한 것들을 실제로 구현할 수 있는 매력에 더욱 빠지게
          해주었습니다. 몇 일을 고민하던 문제들도 해결하고 난 희열감 또한 저를
          코드 중독으로 이끌고 있습니다. 이렇기에 저는 개발을 사랑할 수 있는
          남자라고 생각합니다.
        </StSpan>
      </StContainer>
    </ModalBackdrop>
  );
};

export default LikeFront;

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
