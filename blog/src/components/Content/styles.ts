import styled from "styled-components";

export const Container = styled.div`
  max-width: 1140px;
  padding: 2rem;
  margin: 0 auto;
`;

export const ContentTitle = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 2rem;
  color: #475569;
  font-weight: bold;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #94a3b8;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: #64748b;
  color: #e2e8f0;
  cursor: pointer;
  padding 0.5rem 1rem;
  font-size: 14px;
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover{
    background-color: #e2e8f0;
    color: #64748b;
    transition: all 0.3s ease-in-out;
  }
`;

export const ContenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aligm-items: center;
  heigth: 100%;
  row-gap: 0.5rem;
`;
