import React from "react";

function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <br />
      <h5>{props.phonetics.text}</h5>
    </div>
  );
}

export default Phonetics;
