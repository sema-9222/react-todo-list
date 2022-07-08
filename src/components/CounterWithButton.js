import { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

export function CounterWithButton(props) {
  const [number, setNumber] = useState(0);

  function onClick() {
    setNumber(number + 1);
  }

  return (
    <div>
      <Button btn={props.btn} onClick={onClick} />
      <Counter number={number} />
    </div>
  );
}
