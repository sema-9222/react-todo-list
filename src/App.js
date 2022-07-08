import logo from "./logo.svg";
import "./App.css";
import { Name } from "./components/Name";
import { HorizontalList } from "./components/HorizontalList";
import { CounterWithButton } from "./components/CounterWithButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Name name="Sema" feeling="Sleepy" />
        <Name name="Radek" feeling="Sleepy too" />
        <HorizontalList>
          <CounterWithButton btn="Whatever!" />
          <CounterWithButton btn="Drugi!" />
        </HorizontalList>
      </header>
    </div>
  );
}

export default App;
