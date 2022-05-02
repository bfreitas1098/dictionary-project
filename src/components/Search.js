import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Results } from "./Results";
import { Images } from "./Images";

import { theme } from "../styles/ColorStyles";

export const Search = () => {
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
      <SearchBox>
        <form>
          <input
            type="search"
            autoComplete="off"
            autoFocus="off"
            onChange={handleSearch}
            placeholder="Search a word"
          />
          <button onClick={handleSubmit}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </SearchBox>
      <ImagesWrapper>
        <Images images={images} />
      </ImagesWrapper>
      <ResultsWrapper>
        <Results results={results} />
      </ResultsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const SearchBox = styled.div`
  input {
    position: absolute;
    top: 50px;
    left: 40px;
    border: solid 1px ${theme.borderColor};
    border-radius: 20px;
    padding: 8px;
    width: 400px;
    font-size: 16px;
  }

  i {
    position: absolute;
    z-index: 1;
    color: #dd5e72;
    top: 61px;
    left: 400px;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

const ImagesWrapper = styled.div``;

const ResultsWrapper = styled.div``;
