import React from "react";
import styled from "styled-components";

import { theme } from "../styles/ColorStyles";

export const ContactIcons = () => (
  <Wrapper>
    <a href="mailto:bfreitas1098@hotmail.com" title="Email">
      <i className="fa-solid fa-envelope-open-text"></i>
    </a>
    <hr className="top" />
    <a
      href="https://github.com/bfreitas1098"
      target="_blank"
      rel="noreferrer"
      title="GitHub"
    >
      <i className="fa-brands fa-github"></i>
    </a>
    <hr className="bottom" />
    <a
      href="https://www.linkedin.com/in/barbara-freitas-28b941228/"
      target="_blank"
      rel="noreferrer"
      title="LinkedIn"
    >
      <i className="fa-brands fa-linkedin"></i>
    </a>
  </Wrapper>
);

const Wrapper = styled.div`
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
