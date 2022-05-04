import React from "react";
import styled from "styled-components";

import { theme } from "../styles/ColorStyles";

export const Search = ({ submit, search }) => (
  <Wrapper>
    <SearchBox>
      <form>
        <input
          type="search"
          autoComplete="off"
          autoFocus="off"
          onChange={search}
          placeholder="Search a word"
        />
        <button onClick={submit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </SearchBox>
  </Wrapper>
);

const Wrapper = styled.div``;

const SearchBox = styled.div`
  input {
    position: absolute;
    top: 50px;
    left: 40px;
    border: solid 1px ${theme.borderColor};
    border-radius: 20px;
    padding: 8px;
    width: 400px;
    font-size: 16px;
  }

  i {
    position: absolute;
    z-index: 1;
    color: #dd5e72;
    top: 61px;
    left: 400px;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;
