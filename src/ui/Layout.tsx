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
  margin: 0 auto;

  box-shadow: rgba(0, 0, 0, 1) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
