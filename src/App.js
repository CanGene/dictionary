import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Word Search</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="dream" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/CanGene"
              target="_blank"
              rel="noopener noreferrer"
            >
              Candace Genesis
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
