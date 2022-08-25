import React, { Fragment, useState } from "react";
import {
  Nav,
  NavWrapper,
  Logo,
  Menu,
  List,
  Image,
  Search,
  Input,
  Icon,
  Button,
  MobileButton,
  MobileMenu,
  MobileList,
  MobileContainer,
  H4,
  Toggle,
} from "./styles";
import { Link } from "react-router-dom";
import { RiSearchLine, RiMenuFill, RiCloseLine } from "react-icons/ri";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <Nav>
        <NavWrapper>
          <Logo>
            <Image src={require("../../assets/logo.png")} alt="" />
          </Logo>
          <Search>
            <Icon>
              <RiSearchLine />
            </Icon>
            <Input
              type="text"
              placeholder="Discover news, articles and more ..."
            />
          </Search>
          <Menu>
            <List>
              <Link to="/">Home</Link>
            </List>
            <List>
              <Link to="/">Blog</Link>
            </List>
            <List>
              <Link to="/">Contact</Link>
            </List>
            <List>
              <Link to="/">About</Link>
            </List>
          </Menu>
          <MobileButton>
            <Button>
              <RiSearchLine style={{ fontSize: `20px` }} />
            </Button>
            <Button onClick={() => setShowMenu(true)}>
              <RiMenuFill style={{ fontSize: `20px` }} />
            </Button>
          </MobileButton>
        </NavWrapper>
      </Nav>
      <MobileMenu style={showMenu ? { right: 0 } : { right: "-100%" }}>
        <MobileContainer>
          <H4>Main Menu</H4>
          <MobileList>
            <Link to="/">Home</Link>
          </MobileList>
          <MobileList>
            <Link to="/">Blog</Link>
          </MobileList>
          <MobileList>
            <Link to="/">Contact</Link>
          </MobileList>
          <MobileList>
            <Link to="/">About</Link>
          </MobileList>
          <Toggle>
            <Button onClick={() => setShowMenu(false)}>
              <RiCloseLine style={{ fontSize: `20px` }} />
            </Button>
          </Toggle>
        </MobileContainer>
      </MobileMenu>
    </Fragment>
  );
};
