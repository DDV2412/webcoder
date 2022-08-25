import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  CarouselWrapper,
  Content,
  Image,
  CarouselContent,
  CarouselH1,
  CarouselAuthor,
  AuthorImage,
  ImageAuthor,
  AuthorLabel,
  AuthorName,
  AuthorSpan,
  LabelFlex,
  CardContainer,
} from "./styles";
import { Fragment } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Card } from "../Card";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Container>
        <Slider {...settings}>
          <Content>
            <Image
              src={require("../../assets/image.webp")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <CarouselContent>
              <Link to="/">
                <CarouselH1>
                  The Rise Of Programmatic Outdoor What Advertisers Need To Know
                </CarouselH1>
              </Link>
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
            </CarouselContent>
            <CarouselWrapper />
          </Content>
          <Content>
            <Image
              src={require("../../assets/image.webp")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <CarouselContent>
              <Link to="/">
                <CarouselH1>
                  The Rise Of Programmatic Outdoor What Advertisers Need To Know
                </CarouselH1>
              </Link>
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
            </CarouselContent>
            <CarouselWrapper />
          </Content>
          <Content>
            <Image
              src={require("../../assets/image.webp")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <CarouselContent>
              <Link to="/">
                <CarouselH1>
                  The Rise Of Programmatic Outdoor What Advertisers Need To Know
                </CarouselH1>
              </Link>
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
            </CarouselContent>
            <CarouselWrapper />
          </Content>
        </Slider>
        <CardContainer>
          <Card />
          <Card />
        </CardContainer>
      </Container>
    </Fragment>
  );
};
