import React, { useCallback, useState } from "react";
import { styled } from "styled-components";
import WhyFront from "src/modal/intromodals/WhyFront";
import LikeFront from "src/modal/intromodals/LikeFront";
import ProCon from "src/modal/intromodals/ProCon";
import Plan from "src/modal/intromodals/Plan";

const Introduce = () => {
  const [개발자, 왜개발자] = useState<boolean>(false);
  const [좋은, 좋은이유] = useState<boolean>(false);
  const [장점, 장점단점] = useState<boolean>(false);
  const [앞으로, 앞으로계획] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    왜개발자(false);
    좋은이유(false);
    장점단점(false);
    앞으로계획(false);
  }, []);

  return (
    <>
      <StIntro>
        <StFont>
          <div className="coding">코딩이 즐거운 개발자 😉</div>
          <br />
          안녕하세요 실패의 아픔을 배움의 기쁨으로 개발자의 어깨를 나란히 걷고
          있는 조민욱 입니다.
          <br />
          <br />
          그 동안 부트캠프 교육에서 총 3개의 협업 프로젝트의 참여했습니다.
          <br />
          협업을 통해 적극적인 의사소통과 문제를 찾고 해결에 많은 성장을
          하였으며,
          <br />
          다양한 개발 역량과 스킬을 꾸준히 쌓아왔습니다.
          <br />
          <br />
          여전히 새로운 기술 습득에 대해 두려워 하지 않고 도전적인 모습이며
          <br />
          끊임 없이 공부하고 성실하게 쌓은 지식으로 실질적인 도움이 되는
          <div className="join">프론트엔드 개발자</div>로 성장하고 있습니다.
        </StFont>
        <br />
      </StIntro>

      <StWhy>Way❔</StWhy>

      <StIntroduce>
        <StFront
          onClick={() => {
            왜개발자(true);
          }}
        >
          나는 왜 <br />
          개발자 인가?
        </StFront>
        {개발자 && <WhyFront onCloseModal={onCloseModal} />}

        <StFront
          onClick={() => {
            좋은이유(!좋은);
          }}
        >
          개발이 좋은
          <br />
          이유
        </StFront>
        {좋은 && <LikeFront onCloseModal={onCloseModal} />}

        <StFront
          onClick={() => {
            장점단점(!장점);
          }}
        >
          개발자로써 <br />
          나의 장.단점
        </StFront>
        {장점 && <ProCon onCloseModal={onCloseModal} />}

        <StFront
          onClick={() => {
            앞으로계획(!앞으로);
          }}
        >
          앞으로의 계획
        </StFront>
        {앞으로 && <Plan onCloseModal={onCloseModal} />}
      </StIntroduce>
    </>
  );
};

export default Introduce;

const StIntro = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 113, 175, 0.2);
  width: 70%;
  height: 300px;
  margin: auto;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 800;
`;

const StFont = styled.div`
  margin-top: 50px;
  color: wheat;

  .coding {
    color: yellow;
    font-size: 20px;
  }

  .join {
    display: inline;
    color: #bcff3e;
    font-size: 17px;
  }
`;

const StWhy = styled.h1`
  display: flex;
  justify-content: center;
  color: wheat;
  margin-top: 50px;
`;

const StIntroduce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 70%;
  height: 150px;
`;

const StFront = styled.button`
  color: white;
  border: none;
  background-color: rgb(167, 236, 238, 0.3);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid powderblue;
  cursor: pointer;
  margin: 0 20px 0 20px;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s;
    background-color: #00bfff;
  }
`;
