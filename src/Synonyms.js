import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h5 className="heading">Synonyms:</h5>
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
