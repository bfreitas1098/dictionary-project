import React from "react";
import Definitions from "./Definitions";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="word-section">
          <h2>{props.results.word}</h2>
          <div className="pronunciation">{props.results.pronunciation.all}</div>
        </section>
        {props.results.results.map(function (definition, index) {
          if (index < 5) {
            return <Definitions definition={definition} key={index} />;
          } else {
            return null;
          }
        })}
        <div className="contact-line">
          This website was coded by{" "}
          <a
            href="https://hopeful-franklin-29cc80.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Barbara Freitas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/bfreitas1098/dictionary-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced
          </a>{" "}
          on Github.
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
