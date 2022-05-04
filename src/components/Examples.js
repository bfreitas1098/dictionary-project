import React from "react";
import styled from "styled-components";

export const Examples = ({ examples }) => (
  <Wrapper>
    <ul>
      {examples?.map((example, index) => (
        <li key={index}>
          <em>{example}</em>
        </li>
      ))}
    </ul>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 20px 0 30px -20px;

  ul {
    list-style: none;
  }

  li {
    opacity: 0.6;
  }
`;
