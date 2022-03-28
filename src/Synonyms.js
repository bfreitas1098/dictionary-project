import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <section>
          <h5 className="heading">Synonyms:</h5>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index} className="synonyms-content">
                {synonym}
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
