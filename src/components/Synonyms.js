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
  position: absolute;
  top: 500px;
  left: 800px;
  width: 300px;
  display: grid;
  grid-template-columns: 150px auto;
`;

const SynonymsContent = styled.div``;
