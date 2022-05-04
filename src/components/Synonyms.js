import React from "react";
import styled from "styled-components";

export const Synonyms = ({ synonyms }) => {
  if (synonyms) {
    return (
      <Wrapper>
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
  display: grid;
  grid-template-columns: repeat(3, 150px);
`;

const SynonymsContent = styled.div`
  text-transform: capitalize;
`;
