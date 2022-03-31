import React from "react";
import Synonyms from "./Synonyms";

import "./Definitions.css";

function Definitions(props) {
  return (
    <div className="Definitions">
      <section>
        <h3>{props.definition.partOfSpeech}</h3>
        <div className="mb-3 meaning">{props.definition.definition}</div>
        <div className="example">
          <ul>
            {props.definition.examples?.map((example, index) => (
              <li key={index}>
                <em>{example}</em>
              </li>
            ))}
          </ul>
        </div>
        <Synonyms synonyms={props.definition.synonyms} />
      </section>
    </div>
  );
}

export default Definitions;
