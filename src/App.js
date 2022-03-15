import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/lysanney/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source{" "}
          </a>
          code by Lysanne
        </footer>
      </div>
    </div>
  );
}
