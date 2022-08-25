import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const NavWrapper = styled.div`
  width: 1140px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  max-width: 60px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
    transision: all 0.5s ease-in-out;
  }
`;

export const List = styled.li`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.35rem;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
    transision: all 0.5s ease-in-out;
  }
`;

export const Input = styled.input`
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: none;
  border-radius: 0.35rem;
  outline: none;
  color: #94a3b8;
  background-color: #e2e8f0;
  width: 55%;
`;
export const Icon = styled.div`
  position: absolute;
  right: 0.8rem;
  top: 1rem;
  color: #64748b;
`;

export const MobileButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    transision: all 0.5s ease-in-out;
    column-gap: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 0.35rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: #64748b;
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    width: 75%;
    background-color: #fff;
    top: 0;
    bottom: 0;
    transition: all 0.5s ease-in-out;
  }
`;

export const MobileContainer = styled.div`
  width: 100%;
  padding: 4rem;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  position: relative;
`;

export const MobileList = styled.li`
  padding: 0.5rem 0;
  border: none;
  border-radius: 0.35rem;

  :hover {
    background-color: #94a3b8;
    padding: 0.5rem 1rem;
  }
`;

export const H4 = styled.h4`
  margin-bottom: 1rem;
`;

export const Toggle = styled.div`
  position: absolute;
  left: -5rem;
  top: 2rem;
`;
