import logo from "./logo.svg";
import "./App.css";
import { Name } from "./components/Name";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { useState } from "react";
import { ButtonList } from "./components/ButtonList";
import { CounterList } from "./components/CounterList";
import { CounterWithButton } from "./components/CounterWithButton";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function onClick1() {
    setNumber1(number1 + 1);
  }
  function onClick2() {
    setNumber2(number2 + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CounterWithButton btn="Whatever!" /> */}
        <Name name="Sema" feeling="Sleepy" />
        <Name name="Radek" feeling="Sleepy too" />
        <ButtonList>
          <Button btn="Whatever!" onClick={onClick1} />
          <Button btn="Drugi!" onClick={onClick2} />
        </ButtonList>
        <CounterList>
          <Counter number={number1} />
          <Counter number={number2} />
        </CounterList>
      </header>
    </div>
  );
}

export default App;
