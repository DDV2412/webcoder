import styled from "styled-components";

export const Container = styled.div`
  max-width: 1140px;
  padding: 7rem 2rem 0;
  margin: 0 auto;
  display: flex;
  column-gap: 1rem;

  @media (max-width: 768px) {
    padding: 7rem 1rem 0;
  }
`;
