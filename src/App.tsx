import React from "react";
import "./App.css";
import Router from "./shared/Router";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <StBack>
        <Router />
      </StBack>
    </>
  );
};

export default App;

const StBack = styled.div`
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbipmmj%2FbtsjInaKc2R%2FdgPRwgWrhISK731kYRcBN0%2Fimg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
