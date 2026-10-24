import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>{props.phonetic}</p>
    </div>
  );
}
