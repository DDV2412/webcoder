import React, { Fragment } from "react";
import {
  FooterWrapper,
  Container,
  FooterContent,
  FooterLogo,
  LogoContainer,
  FooterTitle,
  FooterSpan,
} from "./styles";
import { Link } from "react-router-dom";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <Fragment>
      <FooterWrapper>
        <Container>
          <FooterContent>
            <LogoContainer>
              <FooterLogo src={require("../../assets/logo.png")} alt="" />
            </LogoContainer>
            <FooterSpan>
              © {new Date().getFullYear()}, All Rights Reserved.
            </FooterSpan>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Quick Links</FooterTitle>
            <Link to="/">Blog</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Social Media</FooterTitle>
            <Link
              to="/"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <RiFacebookCircleFill />
              Facebook
            </Link>
            <Link
              to="/"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <RiTwitterFill />
              Twitter
            </Link>
            <Link
              to="/"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <RiGithubFill />
              GitHub
            </Link>
          </FooterContent>
        </Container>
      </FooterWrapper>
    </Fragment>
  );
};
