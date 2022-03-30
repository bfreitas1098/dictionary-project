import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h6>Synonyms:</h6>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="synonyms-content">
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
