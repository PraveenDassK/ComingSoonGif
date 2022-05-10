import "./App.css";
import ComingSoonGif from "./assets/ComingSoon.gif";

function App() {
  return (
    <div className="App">
      <img
        src={ComingSoonGif}
        alt="wait until the page loads"
        style={{ width: "90%", height: "50%" }}
      />
    </div>
  );
}

export default App;
