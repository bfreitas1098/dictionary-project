import React from "react";
import styled from "styled-components";
import { Definitions } from "./Definitions";

import { H1 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Results = ({ results }) => {
  if (results) {
    return (
      <Wrapper>
        <SearchedWord>
          <Title>{results.word}</Title>
          <Pronunciation>{`[ ${results.pronunciation.all} ]`}</Pronunciation>
        </SearchedWord>
        <DefinitionsWrapper>
          {results.results.map(function (definition, index) {
            if (index < 5) {
              return <Definitions definition={definition} key={index} />;
            } else {
              return null;
            }
          })}
        </DefinitionsWrapper>
      </Wrapper>
    );
  } else {
    return null;
  }
};

const Wrapper = styled.div``;

const SearchedWord = styled.div`
  position: absolute;
  top: 150px;
  left: 300px;
`;

const Title = styled(H1)`
  color: ${theme.headingColor};
`;

const Pronunciation = styled.div`
  font-size: 20px;
  color: #bbbbbb;
`;

const DefinitionsWrapper = styled.div``;
