import React, { useState } from "react";
import "./Counter.css"

function Counter() {

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  const add = () => {
    setCounter(counter + input)
  }

  const subtract = () => {
    setCounter(counter - input)
  }

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h3 data-testid="counter">{counter}</h3>
      <button
        data-testid="subtract-btn"
        onClick={subtract}
      >
        -
      </button>

      <input
        data-testid="input"
        type="number"
        value={input}
        className="text-center"
        onChange={(e) => setInput(parseInt(e.target.value))}
      />

      <button
        data-testid="add-btn"
        onClick={add}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
