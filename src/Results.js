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
          <div className="phonetics-content col">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </div>
          <div className="definitions-content col">
            {props.results.meanings.map(function (definition, index) {
              return (
                <div key={index}>
                  <Definitions definition={definition} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
