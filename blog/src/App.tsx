import React, { Fragment } from "react";
import { GlobalStyle } from "./styles";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Content } from "./pages/Content";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Content />} />
      </Routes>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
