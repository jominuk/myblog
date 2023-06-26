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
          실패의 아픔을 배움의 기쁨으로 개발자의 어깨를 나란히 걷고 싶어하는
          조민욱 입니다.
          <br />
          <br />
          개발자의 교육을 통해 제가 만든 첫 프로젝트를 직접 유저에게 런칭 하고
          난 희열감은 감히 잊을 수 없습니다. <br />
          또한 프로젝트 제작에 참여했다는 생각에 더 큰 감동으로 저를 &nbsp;
          <div className="join"> 개발자 </div>&nbsp; 로 이끌고 있습니다.
          <br />
          <br />
          끊임없이 공부하고 성실하게 쌓은 지식으로 실질적인 도움이 되는 개발자로
          일하고 싶습니다.
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
