import styled from "styled-components";

export const Container = styled.div`
  max-width: 1140px;
  padding: 8rem 2rem 2rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 8rem 1rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #334155;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-weight: 800;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
  padding: 2rem 0;
  flex-wrap: wrap;
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
  padding: 2rem 0;
  min-height: 100vh;
  width: 100%;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Article = styled.div`
  flex: 1 1 auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  width: 40%;
  heigth: 100%;
  border-radius: 1rem;
  background-color: #fff;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Side = styled.div`
  flex: 1 1 0%;
  width: 100%;
  heigth: 100%;
  border-radius: 1rem;
  overflow: hidden;

  .card {
    width: 100%;
    height: 130px;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    align-items: flex-start;
    padding: 1rem 1rem 1rem 1.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    top: 0;

    h1 {
      padding: 0;
      text-align: left;
      line-height: 1.33;

      a {
        font-weight: bold;
        font-size: 16px;
        color: #1e293b;
      }
    }

    span {
      color: #64748b;
      font-size: 12px;
    }

    &:before {
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
      width: 5px;
      background-color: #60a5fa;
    }

    &:hover {
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
      top: -0.3rem;
      transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  h1 {
    text-align: center;
    font-size: 24px;
    padding: 2rem 0;
  }

  .cardAuthor {
    background-color: #fff;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    gap: 1rem;

    .social {
      width: 100%;
      display: flex;
      column-gap: 1rem;
      margin: 0 auto;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border-radius: 100%;
        background-color: #e2e8f0;

        svg {
          width: 30px;
          height: 30px;
          color: #334155;
        }
      }
    }

    h1 {
      text-align: center;
      font-size: 20px;
    }

    span {
      text-align: center;
      font-size: 14px;
      color: #64748b;
    }

    picture {
      width: 180px;
      height: 180px;
      border-radius: 100%;
      overflow: hidden;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const Thumnail = styled.picture`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  heigth: 100%;
  padding: 2rem;

  p {
    font-size: 18px;
    color: #64748b;
  }
`;
