import React from "react";
import styled from "styled-components";
import { Synonyms } from "./Synonyms";
import { Examples } from "./Examples";
import { Row } from "./Results";

import { H4 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Definitions = ({ definition }) => (
  <Wrapper>
    <Row className="row">
      <DefinitionsWrapper className="col-6">
        <PartOfSpeech>{definition.partOfSpeech}</PartOfSpeech>
        <Definition>{definition.definition}</Definition>
      </DefinitionsWrapper>
      <SynonymsWrapper className="col-6">
        <Synonyms synonyms={definition.synonyms} />
      </SynonymsWrapper>
    </Row>
    <ExamplesWrapper>
      <Examples examples={definition.examples} />
    </ExamplesWrapper>
  </Wrapper>
);

const Wrapper = styled.div``;

const DefinitionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 400px;
`;

const PartOfSpeech = styled(H4)`
  color: ${theme.navColor};
`;

const Definition = styled.div`
  font-size: 18px;
  text-align: left;
  margin-top: -18px;
`;

const ExamplesWrapper = styled.div`
  position: relative;
  top: 115px;
`;

const SynonymsWrapper = styled.div`
  margin-left: 400px;
`;
