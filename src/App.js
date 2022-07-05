import logo from "./logo.svg";
import "./App.css";
import { Name } from "./components/Name";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function onClick() {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name name="Sema" feeling="Sleepy" />
        <Name name="Radek" feeling="Sleepy too" />
        <Button onClick={onClick} />
        <Counter number={number} />
      </header>
    </div>
  );
}

export default App;
