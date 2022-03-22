import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms text-end">
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
