import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword || "");
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    setImages(response.data);
  }

  function search(searchKeyword) {
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${encodeURIComponent(
      searchKeyword,
    )}&key=df0033d89466fabb34t4ob6db243c833`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${encodeURIComponent(
      searchKeyword,
    )}&key=df0033d89466fabb34t4ob6db243c833`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  useEffect(() => {
    const searchKeyword = props.defaultKeyword || "";

    const dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${encodeURIComponent(
      searchKeyword,
    )}&key=df0033d89466fabb34t4ob6db243c833`;

    const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${encodeURIComponent(
      searchKeyword,
    )}&key=df0033d89466fabb34t4ob6db243c833`;

    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }, [props.defaultKeyword]);

  function handleSubmit(event) {
    event.preventDefault();
    search(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={keyword}
            onChange={handleKeywordChange}
            autoFocus
            placeholder="Search for a word..."
          />
        </form>

        <div className="hint">Suggested words: sunset, salvation, love...</div>
      </section>

      <Results results={results} />
      <Images images={images} />
    </div>
  );
}
