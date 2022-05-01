import React from "react";
import { Synonyms } from "./Synonyms";

import "../styles/Definitions.css";

export const Definitions = ({ definition }) => (
  <div className="Definitions">
    <section>
      <h3>{definition.partOfSpeech}</h3>
      <div className="mb-3 meaning">{definition.definition}</div>
      <div className="example">
        <ul>
          {definition.examples?.map((example, index) => (
            <li key={index}>
              <em>{example}</em>
            </li>
          ))}
        </ul>
      </div>
      <Synonyms synonyms={definition.synonyms} />
    </section>
  </div>
);
