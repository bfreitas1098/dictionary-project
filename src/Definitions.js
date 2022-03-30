import React from "react";
import Synonyms from "./Synonyms";

import "./Definitions.css";

function Definitions(props) {
  return (
    <div className="Definitions">
      <section>
        <h3>{props.definition.partOfSpeech}</h3>
        <div className="mb-3 meaning">{props.definition.definition}</div>
        <ul className="example">
          <em>
            <li>{props.definition.examples[0]}</li>
            <li>{props.definition.examples[1]}</li>
          </em>
        </ul>
        <Synonyms synonyms={props.definition.synonyms} />
      </section>
    </div>
  );
}

export default Definitions;
