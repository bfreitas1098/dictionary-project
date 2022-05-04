import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Results } from "./Results";
import { Images } from "./Images";
import { Search } from "./Search";
import { Navbar } from "./Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.css";

export const App = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");
  const [images, setImages] = useState("");

  const searchWord = () => {
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
  };

  const handleImages = (response) => {
    setImages(response.data.photos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchWord();
  };

  const handleSearch = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Wrapper>
      <Navbar />
      <Search submit={handleSubmit} search={handleSearch} />
      <Results results={results} />
      <Images images={images} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
