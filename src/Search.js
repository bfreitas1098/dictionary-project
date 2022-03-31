import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

import "./Search.css";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");
  const [images, setImages] = useState("");

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
      setResults(response.data);
    });

    const pexelsApiKey =
      "563492ad6f91700001000001858a74c66a824987be643e41407c1348";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handleImages);
  }

  function handleImages(response) {
    setImages(response.data.photos);
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
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-start">My Favorite Dictionary.</h1>
          <div className="col-sm search-content">
            <section>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  autoComplete="off"
                  autoFocus="off"
                  onChange={handleSearch}
                  className="search-box"
                />
                <input type="submit" value="Define" className="search-button" />
              </form>
            </section>
            <div className="images-section">
              <Images images={images} />
            </div>
          </div>
          <div className="col-sm results-content">
            <Results results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
