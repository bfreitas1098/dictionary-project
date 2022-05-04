import React from "react";
import styled from "styled-components";
import { Definitions } from "./Definitions";
import { Images } from "./Images";

import { H1 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Results = ({ results, images }) => {
  if (results) {
    return (
      <Wrapper>
        <Row className="row">
          <HeadingColumn className="col-6">
            <Title>{results.word}</Title>
            <Pronunciation>{`[ ${results.pronunciation.all} ]`}</Pronunciation>
          </HeadingColumn>
          <ImagesWrapper className="col-6">
            <Images images={images} />
          </ImagesWrapper>
        </Row>
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

const HeadingColumn = styled.div`
  margin-top: 150px;
  margin-left: -20px;
`;

export const Row = styled.div``;

const Title = styled(H1)`
  color: ${theme.headingColor};
`;

const Pronunciation = styled.div`
  font-size: 20px;
  color: #bbbbbb;
`;

const ImagesWrapper = styled.div``;

const DefinitionsWrapper = styled.div`
  margin-top: 60px;
`;
