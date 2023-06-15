import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ezip = () => {
  const windowOpen = useCallback(() => {
    window.open("https://github.com/jominuk/Final_Project-ezip");
  }, []);
  return (
    <>
      <StEzip>
        <StHone> 이집은 : ezip</StHone>

        <StPeriod>
          <StTime> 개발 기간 : 22. 12. 24 ~ 23. 02. 10 </StTime>
          <StLink onClick={windowOpen}>Github 바로가기</StLink>
        </StPeriod>
      </StEzip>
    </>
  );
};

export default Ezip;

const StEzip = styled.div`
  margin: auto;
  width: 80%;
`;

const StHone = styled.h2`
  color: white;
`;

const StPeriod = styled.div`
  height: 80px;
  background-color: rgba(255, 113, 175, 0.2);
  padding: 30px;
`;

const StTime = styled.div`
  color: white;
`;

const StLink = styled.div`
  color: white;
`;
