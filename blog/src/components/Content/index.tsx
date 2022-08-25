import React, { Fragment } from "react";
import {
  Container,
  ContentTitle,
  Button,
  ContenWrapper,
  ContenContainer,
} from "./styles";
import { Card, OtherCard } from "../Card";
import { HorizontalADS } from "../HorizontalADS";

export const Content = () => {
  return (
    <Fragment>
      <Container>
        <ContentTitle>
          Advertising
          <Button>View More</Button>
        </ContentTitle>
        <ContenWrapper>
          <OtherCard />
          <ContenContainer>
            <Card />
            <Card />
            <Card />
          </ContenContainer>
          <OtherCard />
        </ContenWrapper>
        <HorizontalADS />
        <ContentTitle>
          Advertising
          <Button>View More</Button>
        </ContentTitle>
        <ContenWrapper>
          <OtherCard />
          <ContenContainer>
            <Card />
            <Card />
            <Card />
          </ContenContainer>
          <OtherCard />
        </ContenWrapper>
      </Container>
    </Fragment>
  );
};
