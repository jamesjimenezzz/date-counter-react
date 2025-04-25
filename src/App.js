import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function stepHandlerMinus() {
    setStep((s) => s - 1);
  }

  function stepHandlerPlus() {
    setStep((s) => s + 1);
  }

  function countHandlerMinus() {
    setCount((c) => c - step);
  }

  function countHandlerPlus() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <button onClick={stepHandlerMinus}> - </button>
      <span> Step: {step} </span>
      <button onClick={stepHandlerPlus}> + </button>
      <div>
        <button onClick={countHandlerMinus}> - </button>
        <span> Count: {count} </span>
        <button onClick={countHandlerPlus}> + </button>
      </div>
      <div>
        <span>
          {" "}
          {count === 0
            ? "today is"
            : count === 1
            ? `${count} day from today is`
            : count > 1
            ? `${count} days from today is`
            : count === -1
            ? `${Math.abs(count)} day ago was`
            : `${Math.abs(count)} days ago was`}{" "}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default App;
