import React from "react";
import Synonyms from "./Synonyms";

import "./Definitions.css";

function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>{definition.definition}</div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}

export default Definitions;
