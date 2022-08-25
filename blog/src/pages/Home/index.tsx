import React, { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { HeaderWrapper } from "./styles";
import { Footer } from "../../components/Footer";
import { Content } from "../../components/Content";

const Home = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Home;
