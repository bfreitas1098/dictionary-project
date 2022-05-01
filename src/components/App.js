import React from "react";
import styled from "styled-components";
import { Search } from "./Search";

import { theme } from "../styles/ColorStyles";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.css";

export const App = () => (
  <div className="App">
    <NavBar>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid" />
      </nav>
    </NavBar>
    <Search />
  </div>
);

export const NavBar = styled.nav`
  .navbar {
    background-color: ${theme.navColor} !important;
    position: absolute;
    width: 70px;
    height: 1000px;
    left: 0px;
  }
`;
