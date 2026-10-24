import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword || "");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${encodeURIComponent(keyword)}&key=df0033d89466fabb34t4ob6db243c833`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    search();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
            autoFocus={true}
            placeholder="Search for a word..."
            defaultValue={props.defaultKeyword}
          />
        </form>

        <div className="hint">Suggested words: sunset, salvation, love...</div>
      </section>

      <Results results={results} />
    </div>
  );
}
