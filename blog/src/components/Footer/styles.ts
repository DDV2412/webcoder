import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: #fff;
`;

export const Container = styled.div`
  max-width: 1140px;
  padding: 3rem 2rem;
  margin: 0 auto;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: fles-start;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FooterLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FooterTitle = styled.h1`
  color: #334155;
  font-size: 16px;
  font-weigth: 500;
`;

export const FooterSpan = styled.span`
  color: #334155;
  font-size: 13px;
  font-weigth: 500;
`;
