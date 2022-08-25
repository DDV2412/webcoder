import React, { Fragment } from "react";
import {
  Container,
  Title,
  Label,
  Main,
  Article,
  Side,
  Thumnail,
  ContentWrapper,
} from "./styles";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Footer } from "../../components/Footer";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";

export const Content = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Title>Markdown Language Sample Blog Post Styling</Title>
        <Label>
          By <Link to="/">James Smitch</Link>{" "}
          <RiCheckboxBlankCircleFill style={{ fontSize: "5px" }} /> Published in{" "}
          <Link to="/">Advertising</Link>{" "}
          <RiCheckboxBlankCircleFill style={{ fontSize: "5px" }} />{" "}
          {new Date().toDateString()}
        </Label>

        <Main>
          <Article>
            <Thumnail>
              <img
                src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/f47df/image.webp"
                alt=""
              />
            </Thumnail>
            <ContentWrapper>
              <p>
                Markdown is a lightweight markup language with
                plain-text-formatting syntax. Its design allows it to be
                converted to many output formats, but the original tool by the
                same name only supports HTML. Markdown is often used to format
                readme files, for writing messages in online discussion forums,
                and to create rich text using a plain text editor.
              </p>
            </ContentWrapper>
          </Article>
          <Side>
            <div className="cardAuthor">
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </picture>

              <h1>James Smitch</h1>
              <span>Backend Developer</span>
              <div className="social">
                <Link to="/">
                  <RiFacebookCircleFill />
                </Link>
                <Link to="/">
                  <RiTwitterFill />
                </Link>
                <Link to="/">
                  <RiGithubFill />
                </Link>
              </div>
            </div>

            <h1>Related Posts</h1>

            <div className="card">
              <h1>
                <Link to="/markdown-language-sample-blog-post-styling">
                  Markdown Language Sample Blog Post Styling
                </Link>
              </h1>
              <span>James Smitch . {new Date().toDateString()}</span>
            </div>
          </Side>
        </Main>
      </Container>
      <Footer />
    </Fragment>
  );
};
