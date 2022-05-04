import React from "react";
import styled from "styled-components";
import { ContactIcons } from "./ContactIcons";

import { theme } from "../../styles/ColorStyles";

export const Navbar = () => (
  <Wrapper>
    <BookIcon>
      <i className="fa-solid fa-book-open"></i>
    </BookIcon>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid" />
      <IconWrapper>
        <ContactIcons />
      </IconWrapper>
      <a
        href="https://hopeful-franklin-29cc80.netlify.app/"
        target="_blank"
        rel="noreferrer"
        title="Barbara Freitas"
      >
        <div className="copyright-name">© Barbara Freitas</div>
      </a>
    </nav>
  </Wrapper>
);

const Wrapper = styled.nav`
  .navbar {
    background-color: ${theme.navColor} !important;
    position: absolute;
    width: 70px;
    height: 821px;
    left: -170px;
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
  left: -155px;
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
`;
