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
        <IconWrapper>
          <a href="mailto:bfreitas1098@hotmail.com">
            <i className="fa-solid fa-envelope-open-text"></i>
          </a>
          <hr className="top" />
          <a
            href="https://github.com/bfreitas1098"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <hr className="bottom" />
          <a
            href="https://www.linkedin.com/in/barbara-freitas-28b941228/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </IconWrapper>
        <a
          href="https://hopeful-franklin-29cc80.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="copyright-name">© Barbara Freitas</div>
        </a>
      </nav>
    </NavBar>
    <Search />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const NavBar = styled.nav`
  .navbar {
    background-color: ${theme.navColor} !important;
    position: absolute;
    width: 70px;
    height: 1000px;
    left: -168px;
  }

  .copyright-name {
    position: absolute;
    z-index: 1;
    top: 773px;
    left: 2px;
    font-size: 10px;
    line-height: 18px;
    color: ${theme.iconColor};
  }
`;

const BookIcon = styled.i`
  position: absolute;
  left: -150px;
  top: 40px;
  z-index: 1;
  font-size: 33px;
  color: ${theme.iconColor};
`;

const IconWrapper = styled.div`
  writing-mode: vertical-lr;
  position: absolute;
  z-index: 1;
  top: 600px;
  right: 5px;

  i {
    color: ${theme.iconColor};
    margin: 15px;
    font-size: 28px;
  }

  .top {
    position: absolute;
    z-index: 1;
    color: #101f33;
    width: 25px;
    height: 2px;
    top: 41px;
    left: 16px;
  }

  .bottom {
    position: absolute;
    z-index: 1;
    color: #101f33;
    width: 25px;
    height: 2px;
    top: 99px;
    left: 16px;
  }
`;
