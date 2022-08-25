import React, { Fragment } from "react";
import {
  CardContainer,
  CardImage,
  CardImg,
  CardLabel,
  CardTitle,
  CardContent,
  CardSpan,
  CardSill,
  OtherCardImage,
  OtherCardContainer,
  OtherCardContent,
  CardDesc,
  CarouselAuthor,
  AuthorImage,
  AuthorLabel,
  AuthorSpan,
  LabelFlex,
  AuthorName,
  ImageAuthor,
} from "./styles";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <Fragment>
      <CardContainer>
        <CardSill />
        <CardImage>
          <CardImg
            src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/6b99c/image.webp"
            alt=""
          />
        </CardImage>
        <CardContent>
          <CardLabel>Advertising</CardLabel>
          <CardTitle>
            <Link to="/markdown-language-sample-blog-post-styling">
              Markdown Language Sample Blog Post Styling
            </Link>
          </CardTitle>
          <CardSpan>James Smitch . {new Date().toDateString()}</CardSpan>
        </CardContent>
      </CardContainer>
    </Fragment>
  );
};

export const OtherCard = () => {
  return (
    <Fragment>
      <OtherCardContainer>
        <OtherCardImage>
          <CardImg
            src="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/6b99c/image.webp"
            alt=""
          />
        </OtherCardImage>
        <OtherCardContent>
          <CardLabel>Advertising</CardLabel>
          <CardTitle>
            5 Easy Ways to Boost Your Team Performance Immediately
          </CardTitle>
          <CardDesc>
            Primo in altis pelle alumnae Lorem markdownum obvius in seque opus,
            est bicorni forte; laeva…
          </CardDesc>
          <CarouselAuthor>
            <AuthorImage>
              <ImageAuthor
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </AuthorImage>
            <AuthorLabel>
              <AuthorName>James Smitch</AuthorName>
              <LabelFlex>
                <AuthorSpan>{new Date().toDateString()}</AuthorSpan>
              </LabelFlex>
            </AuthorLabel>
          </CarouselAuthor>
        </OtherCardContent>
      </OtherCardContainer>
    </Fragment>
  );
};
