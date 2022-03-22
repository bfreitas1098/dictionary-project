import React from "react";
import Synonyms from "./Synonyms";

function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
          </div>
        );
      })}
      <section>
        <Synonyms synonyms={props.definition.synonyms} />
      </section>
    </div>
  );
}

export default Definitions;
