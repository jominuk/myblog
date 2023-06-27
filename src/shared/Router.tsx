import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/ui/Layout";
import Header from "src/ui/Header";
import Skill from "src/page/Skill";
import Project from "src/page/Project";
import Introduce from "src/page/Introduce";
import Ezip from "src/page/Ezip";
import Slack from "src/page/Slack";
import Person from "src/page/Person";
import Ai from "src/page/Ai";
import Eeat from "src/page/Ueat";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Skill alt={""} src={undefined} />} />
          <Route
            path="/project"
            element={<Project alt={""} src={undefined} />}
          />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/ezip" element={<Ezip alt={""} src={undefined} />} />
          <Route path="/slack" element={<Slack alt={""} src={undefined} />} />
          <Route path="/person" element={<Person alt={""} src={undefined} />} />
          <Route path="/ai" element={<Ai alt={""} src={undefined} />} />
          <Route path="/eat" element={<Eeat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
