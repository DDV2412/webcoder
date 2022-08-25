import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  heigth: 100%;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e293b;
  flex: 1 1 0%;
  @media (max-width: 768px) {
    display: none;
  }
`;
