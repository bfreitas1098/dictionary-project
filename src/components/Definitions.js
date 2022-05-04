import React from "react";
import styled from "styled-components";
import { Synonyms } from "./Synonyms";
import { Examples } from "./Examples";

import { H4 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Definitions = ({ definition }) => (
  <Wrapper>
    <Row className="row">
      <DefinitionsWrapper>
        <PartOfSpeech>{definition.partOfSpeech}</PartOfSpeech>
        <Definition>
          {definition.definition}
          <ExamplesWrapper>
            <Examples examples={definition.examples} />
          </ExamplesWrapper>
        </Definition>
      </DefinitionsWrapper>
      <SynonymsWrapper>
        <Synonyms synonyms={definition.synonyms} />
      </SynonymsWrapper>
    </Row>
  </Wrapper>
);

const Wrapper = styled.div``;

const Row = styled.div`
  display: grid;
  grid-template-columns: 500px 300px;
  gap: 150px;
`;

const DefinitionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 400px;
`;

const PartOfSpeech = styled(H4)`
  color: ${theme.navColor};
  margin-left: -10px;
`;

const Definition = styled.div`
  font-size: 18px;
  text-align: left;
  margin-top: -18px;
`;

const ExamplesWrapper = styled.div``;

const SynonymsWrapper = styled.div`
  margin-top: 50px;
  height: 20px !important;
`;
