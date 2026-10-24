import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning;
  return (
    <div className="Meaning">
      <div className="meaning">
        <h3>{meaning.partOfSpeech}</h3>

        <div className="definition">
          {meaning.definition}
          {meaning.example && (
            <div className="example">
              "<em>{meaning.example}</em>"
            </div>
          )}
        </div>
        <div className="synonyms">
          <Synonyms synonyms={meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
