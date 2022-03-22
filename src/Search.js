import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Search.css";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <section className="text-start">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoComplete="off"
              autoFocus="off"
              onChange={handleSearch}
            />
            <input type="submit" value="Define" />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Search;
