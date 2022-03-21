import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Search.css";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={searchWord}>
        <input
          type="search"
          autoComplete="off"
          autoFocus="off"
          onChange={handleSearch}
        />
        <input type="submit" value="Define" />
      </form>
      <Results results={results} />
    </div>
  );
}

export default Search;
