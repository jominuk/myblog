import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/ui/Layout";
import Header from "src/ui/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes></Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
