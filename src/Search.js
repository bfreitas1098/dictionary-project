import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Search.css";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function searchWord() {
    let options = {
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${keyword}`,
      headers: {
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        "X-RapidAPI-Key": "cbd6275cbamshb89e88f9211dd1ep15c3b8jsn7e7be1d28bd5",
      },
    };
    axios.request(options).then(function handleResponse(response) {
      console.log(response.data);
      setResults(response.data);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoComplete="off"
          autoFocus="off"
          onChange={handleSearch}
        />
        <input type="submit" value="Define" className="btn btn-outline-dark" />
      </form>
      <Results results={results} />
    </div>
  );
}

export default Search;
