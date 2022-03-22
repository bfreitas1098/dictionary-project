import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-start">{props.results.word}</h2>
        <div className="row">
          {props.results.meanings.map(function(definition, index) {
            return (
              <section key={index} className="col-sm-8">
                <Definitions definition={definition} />
              </section>
            );
          })}
          {props.results.phonetics.map(function(phonetic, index) {
            return (
              <section key={index} className="text-end">
                <Phonetics phonetics={phonetic} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
