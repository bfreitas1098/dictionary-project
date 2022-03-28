import React from "react";
import Definitions from "./Definitions";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <div>{props.results.pronunciation.all}</div>
        {props.results.results.map(function (definition, index) {
          if (index < 5) {
            return <Definitions definition={definition} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
