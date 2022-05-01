import React from "react";
import styled from "styled-components";
import { Search } from "./Search";

import { theme } from "../styles/ColorStyles";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.css";

export const App = () => (
  <Wrapper>
    <NavBar>
      <BookIcon>
        <i className="fa-solid fa-book-open"></i>
      </BookIcon>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid" />
        <Title>
          <span>
            My Favorite
            <br />
            Dictionary.
          </span>
        </Title>
      </nav>
    </NavBar>
    <Search />
  </Wrapper>
);

export const Wrapper = styled.div`
  position: relative;
`;

export const NavBar = styled.nav`
  .navbar {
    background-color: ${theme.navColor} !important;
    position: absolute;
    width: 70px;
    height: 1000px;
    left: -168px;
  }
`;

export const BookIcon = styled.i`
  position: absolute;
  left: -150px;
  top: 55px;
  z-index: 1;
  font-size: 33px;
  color: ${theme.sectionColor};
`;

export const Title = styled.span`
  transform: rotate(-90deg);
  position: absolute;
  z-index: 1;
  top: 160px;
  left: -32px;
  color: white;
  font-size: 22px;
  margin-right: -200px;
  line-height: 30px;
`;
