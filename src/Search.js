import React, { useState } from "react";

import "./Search.css";

function Search() {
  const [keyword, setKeyword] = useState(null);

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
