import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <section>
        <h4>{props.results.word}</h4>
        {props.results.phonetic && (
          <Phonetic phonetic={props.results.phonetic} />
        )}
      </section>
      <section>
        {props.results.meanings?.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} />;
        })}
      </section>
    </div>
  );
}
