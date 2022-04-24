import React from "react";

import "./App.css";
import "antd/dist/antd.min.css";

import { Layout } from "antd";
import AppHeader from "./components/common/Header";
import { Content, Footer } from "antd/lib/layout/layout";
import AppHome from "./components/views/Home";
import AppFooter from "./components/common/Footer";

const { Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
