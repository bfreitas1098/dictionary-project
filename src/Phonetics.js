import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Phonetics(props) {
  let audio = props.phonetics.audio;
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={audio} controls />
      <br />
      <h5>{props.phonetics.text}</h5>
    </div>
  );
}

export default Phonetics;
