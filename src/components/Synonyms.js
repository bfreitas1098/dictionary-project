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
  position: relative;
  top: 50px;
  left: 300px;
  display: grid;
  grid-template-columns: repeat(2, 200px);
`;

const SynonymsContent = styled.div`
  text-transform: capitalize;
`;
