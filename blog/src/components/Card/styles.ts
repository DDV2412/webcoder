import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  height: 180px;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1.2rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  top: 0;

  &:hover {
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    top: -0.3rem;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OtherCardContainer = styled.div`
  width: 400px;
  height: max-content;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0.65rem;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  top: 0;

  &:hover {
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    top: -0.3rem;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardSill = styled.div`
  background-color: #60a5fa;
  width: 8px;
  position: absolute;
  left: 0;
  height: 100%;
`;

export const CardImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OtherCardImage = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  flex: 1 1 0%;
`;

export const OtherCardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const CardLabel = styled.div`
  max-width: max-content;
  max-height; max-content;
  padding: 0.5rem 1rem;
  border-radius: .5rem;
  background-color: #94a3b8;
  font-weight: 500;
  font-size: 13px
`;

export const CardTitle = styled.h1`
  font-weight: bold;
  font-size: 16px;
  color: #1e293b;
`;

export const CardDesc = styled.p`
  color: #64748b;
`;

export const CardSpan = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 12px;
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
  height: 50px;
  border: 2px solid #e2e8f0;
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
  color: #64748b;
  margin-bottom: 0.25rem;
  font-size: 14px;
`;

export const LabelFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const AuthorSpan = styled.span`
  color: #94a3b8;
  font-size: 13px;
`;
