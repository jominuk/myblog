import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Project = () => {
  const navigate = useNavigate();

  const onHendleImg = useCallback(() => {
    navigate("/ezip");
  }, [navigate]);

  return (
    <>
      <StProject>
        <StImg
          alt="ezip"
          src={require("../image/ezip.png")}
          onClick={onHendleImg}
        />

        <StContent>
          <StTitle> ezip : 이집은 </StTitle>
          <StLine />
          <StCont>
            ☝️실제 거주 해 본 사람들이 작성하는 찐 리뷰 플렛폼🏘️
            <br />
            <br />
            ✌️집주인도, 중개사도 모르는 진짜 후기를 알려주는
            <br />
            &nbsp; &nbsp; 플렛폼🏘️
          </StCont>
        </StContent>
      </StProject>
    </>
  );
};

export default Project;

const StProject = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
`;

const StImg = styled.img`
  width: 450px;
  height: 330px;
  border-radius: 20px;
`;

const StContent = styled.div`
  width: 430px;
  height: 250px;
  margin: auto;
`;

const StTitle = styled.h1`
  color: wheat;
  margin: 0 0 0 125px;
`;

const StLine = styled.div`
  border-bottom: 1px solid white;
  margin-top: 20px;
`;

const StCont = styled.div`
  color: white;
  margin-top: 50px;
`;
