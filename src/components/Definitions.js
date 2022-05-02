import React from "react";
import styled from "styled-components";
import { Synonyms } from "./Synonyms";

import { H4 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Definitions = ({ definition }) => (
  <Wrapper>
    <PartOfSpeech>{definition.partOfSpeech}</PartOfSpeech>
    <Definition>{definition.definition}</Definition>
    <Examples>
      <ul>
        {definition.examples?.map((example, index) => (
          <li key={index}>
            <em>{example}</em>
          </li>
        ))}
      </ul>
    </Examples>
    <Synonyms synonyms={definition.synonyms} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const PartOfSpeech = styled(H4)`
  color: ${theme.navColor};
`;

const Definition = styled.div`
  font-size: 18px;
`;

const Examples = styled.div`
  ul {
    list-style: none;
  }

  li {
    opacity: 0.8;
  }
`;
