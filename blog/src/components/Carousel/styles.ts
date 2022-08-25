import styled from "styled-components";

export const Container = styled.div`
  max-width: 75%;
  border-radius: 1rem;
  flex: 1 1 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CarouselContent = styled.div`
  position: absolute;
  z-index: 4;
  left: 6rem;
  top: 4rem;
  padding: 2rem;
  @media (max-width: 768px) {
    left: 1rem;
    top: 0.5rem;
    padding: 1rem;
  }
`;

export const CarouselH1 = styled.a`
  font-size: 2.25rem;
  color: #fff;
  font-weight: bold;
  padding-bottom: 1.3rem;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CarouselAuthor = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AuthorImage = styled.div`
  border-radius: 100%;
  height: 55px;
  border: 2px solid #fff;
  overflow: hidden;
  width: 60px;
`;

export const ImageAuthor = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const AuthorLabel = styled.div`
  width: 100%;
`;

export const AuthorName = styled.h1`
  color: #fff;
  margin-bottom: 0.25rem;
`;

export const LabelFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const AuthorSpan = styled.span`
  color: #fff;
`;

export const CarouselWrapper = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(30, 41, 59, 0.8);
  border-radius: 1rem;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
