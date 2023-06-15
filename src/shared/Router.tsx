import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/ui/Layout";
import Header from "src/ui/Header";
import Skill from "src/page/Skill";
import Project from "src/page/Project";
import Introduce from "src/page/Introduce";
import Ezip from "src/page/Ezip";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/" element={<Introduce />} />
          <Route path="/ezip" element={<Ezip />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
