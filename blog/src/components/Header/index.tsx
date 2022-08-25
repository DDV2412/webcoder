import React, { Fragment } from "react";
import { Container } from "./styles";
import { Carousel } from "../Carousel";
import { VerticalADS } from "../VerticalADS";

export const Header = () => {
  return (
    <Fragment>
      <Container>
        <Carousel />
        <VerticalADS />
      </Container>
    </Fragment>
  );
};
