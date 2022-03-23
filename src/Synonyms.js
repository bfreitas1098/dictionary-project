import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h5 className="heading">Synonyms:</h5>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonyms-content">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
