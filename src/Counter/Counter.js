import React, { useState } from "react";
import "./Counter.css"

function Counter() {

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);


  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h3 data-testid="counter">{counter}</h3>
      <button data-testid="subtract-btn">-</button>
      <input
        data-testid="input"
        type="number"
        value={input}
        className="text-center"
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="add-btn">+</button>
    </div>
  );
}

export default Counter;
