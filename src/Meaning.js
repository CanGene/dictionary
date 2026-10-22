import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning;
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      <p>
        <strong>Definition:</strong> {meaning.definition}
        {meaning.example && (
          <>
            <br />
            <strong>Example:</strong> <em>{meaning.example}</em>
          </>
        )}
      </p>

      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
