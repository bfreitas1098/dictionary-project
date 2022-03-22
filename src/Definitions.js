import React from "react";
import Synonyms from "./Synonyms";

import "./Definitions.css";

function Definitions(props) {
  return (
    <div className="Definitions">
      <div className="row">
        <div className="main-definition col-sm-4">
          <h3>{props.definition.partOfSpeech}</h3>
          <p>{props.definition.definitions[0].definition}</p>
        </div>
        <div className="alternative-definitions col-sm-4">
          <ul>
            <li>{props.definition.definitions[1].definition}</li>
            <li>{props.definition.definitions[2].definition}</li>
          </ul>
        </div>
      </div>
      {props.definition.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.example}</p>
          </div>
        );
      })}
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}

export default Definitions;
