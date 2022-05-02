import React from "react";
import styled from "styled-components";

import { H6 } from "../styles/TextStyles";

export const Synonyms = ({ synonyms }) => {
  if (synonyms) {
    return (
      <Wrapper>
        <Title>Synonyms:</Title>
        {synonyms.map(function (synonym, index) {
          return <SynonymsContent key={index}>{synonym}</SynonymsContent>;
        })}
      </Wrapper>
    );
  } else {
    return null;
  }
};

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled(H6)``;

const SynonymsContent = styled.div`
  display: inline-block;
`;
