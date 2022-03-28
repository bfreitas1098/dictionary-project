import React from "react";
import Synonyms from "./Synonyms";

import "./Definitions.css";

function Definitions(props) {
  return (
    <div>
      <h3>{props.definition.partOfSpeech}</h3>
      <div>{props.definition.definition}</div>
      <div>
        <em>{props.definition.examples}</em>
      </div>
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}

export default Definitions;
