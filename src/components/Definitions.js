import React from "react";
import styled from "styled-components";
import { Synonyms } from "./Synonyms";
import { Examples } from "./Examples";

import { H4 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Definitions = ({ definition }) => (
  <Wrapper>
    <DefinitionsWrapper>
      <PartOfSpeech>{definition.partOfSpeech}</PartOfSpeech>
      <Definition>{definition.definition}</Definition>
    </DefinitionsWrapper>
    <ExamplesWrapper>
      <Examples examples={definition.examples} />
    </ExamplesWrapper>
    <SynonymsWrapper>
      <Synonyms synonyms={definition.synonyms} />
    </SynonymsWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const DefinitionsWrapper = styled.div``;

const PartOfSpeech = styled(H4)`
  color: ${theme.navColor};
  position: relative;
  top: 299px;
  right: 60px;
  width: 100px;
`;

const Definition = styled.div`
  font-size: 18px;
  position: absolute;
  top: 300px;
  left: 50px;
  width: 600px;
  height: 800px;
  text-align: left;
`;

const ExamplesWrapper = styled.div``;

const SynonymsWrapper = styled.div``;
