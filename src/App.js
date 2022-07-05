import logo from "./logo.svg";
import "./App.css";
import { Name } from "./components/Name";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name name="Sema" feeling="Sleepy" />
        <Name name="Radek" feeling="Sleepy too" />
        <Button />
      </header>
    </div>
  );
}

export default App;
