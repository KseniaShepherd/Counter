import { useState } from "react";
import "./index.scss";

function App() {
  const [state, setState] = useState(0);
  const onClickPlus = () => {
    setState(state + 1);
    console.log(state)
  };
  const onClickMinus = () => {
    setState(state - 1);
    console.log(state)
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{state}</h1>
        <button onClick={() => onClickMinus()} className="minus">
          - Минус
        </button>
        <button onClick={() => onClickPlus()} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
