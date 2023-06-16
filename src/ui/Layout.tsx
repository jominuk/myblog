import React from "react";
import styled from "styled-components";
import { LayoutProps } from "src/type/type";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  min-height: 100vh;
  max-height: 800px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #b0c8ea; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(137, 180, 43, 0.24); /*스크롤바 뒷 배경 색상*/
  }

  box-shadow: rgba(0, 0, 0, 1) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
