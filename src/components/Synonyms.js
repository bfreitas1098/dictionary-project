import React from "react";

import "../styles/Synonyms.css";

export const Synonyms = ({ synonyms }) => {
  if (synonyms) {
    return (
      <div className="Synonyms">
        <h6>Synonyms:</h6>
        {synonyms.map(function (synonym, index) {
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
};
