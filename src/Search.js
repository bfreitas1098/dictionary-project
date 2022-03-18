import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

function Search() {
  const [keyword, setKeyword] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  function searchWord(event) {
    event.preventDefault();
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
    </div>
  );
}

export default Search;
