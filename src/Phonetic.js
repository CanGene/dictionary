import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>
        <strong>Phonetic:</strong> {props.phonetic.text}
      </p>
    </div>
  );
}
