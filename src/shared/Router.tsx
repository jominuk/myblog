import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/ui/Layout";
import Header from "src/ui/Header";
import Skill from "src/page/Skill";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/123" element={<Skill />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
