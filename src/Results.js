import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function(definition, index) {
          return (
            <div key={index}>
              <Definitions definition={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
