import { useState } from "react";

function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  function decreaseCount() {
    if (count > 1) setCount((c) => c - 1);
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseStep() {
    if (step > 1) setStep((c) => c - 1);
  }

  return (
    <div className="counter">
      <div>
        <button onClick={decreaseStep}>-</button>
        <span>&nbsp;Step: {step}&nbsp;&nbsp;</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <span>&nbsp;Count: {count}&nbsp;</span>
        <button onClick={increaseCount}>+</button>
      </div>

      <Display finalCount={step * count} />
    </div>
  );

  function Display(props) {
    // Get current date
    const currDate = new Date();
    currDate.setDate(currDate.getDate() + props.finalCount);

    return (
      <div>
        <p>
          {props.finalCount}&nbsp;day<span>{step > 1 && "s"}</span> from today
          is{" "}
          {`${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()} `}
        </p>
      </div>
    );
  }
}

export default App;
