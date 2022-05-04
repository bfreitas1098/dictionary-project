import React from "react";
import styled from "styled-components";
import { Synonyms } from "./Synonyms";
import { Examples } from "./Examples";

import { H4 } from "../styles/TextStyles";
import { theme } from "../styles/ColorStyles";

export const Definitions = ({ definition }) => (
  <Wrapper>
    <PartOfSpeech>{definition.partOfSpeech}</PartOfSpeech>
    <Definition>{definition.definition}</Definition>
    <ExamplesWrapper>
      <Examples examples={definition.examples} />
    </ExamplesWrapper>
    <SynonymsWrapper>
      <Synonyms synonyms={definition.synonyms} />
    </SynonymsWrapper>
  </Wrapper>
);

const Wrapper = styled.div``;

const PartOfSpeech = styled(H4)`
  color: ${theme.navColor};
`;

const Definition = styled.div`
  font-size: 18px;
`;

const ExamplesWrapper = styled.div``;

const SynonymsWrapper = styled.div``;
