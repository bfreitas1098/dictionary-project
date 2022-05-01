import React from "react";
import { Definitions } from "./Definitions";

import "../styles/Results.css";

export const Results = ({ results }) => {
  if (results) {
    return (
      <div className="Results">
        <section className="word-section">
          <h2>{results.word}</h2>
          <div className="pronunciation">{`[ ${results.pronunciation.all} ]`}</div>
        </section>
        <div className="definitions-content">
          {results.results.map(function (definition, index) {
            if (index < 5) {
              return <Definitions definition={definition} key={index} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
