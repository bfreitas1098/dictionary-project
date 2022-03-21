import React from "react";
import Synonyms from "./Synonyms";

function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}

export default Definitions;
