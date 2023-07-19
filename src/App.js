import { useState } from "react";

function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increaseCount() {
    setCount((c) => c + step);
  }

  function decreaseCount() {
    setCount((c) => c - step);
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

      <Display finalCount={count} />
    </div>
  );

  function Display({ finalCount }) {
    // Get current date
    const currDate = new Date();
    currDate.setDate(currDate.getDate() + finalCount);

    return (
      <div>
        <p>
          {
            // Display today is <currDate>
            finalCount === 0
              ? `Today is `
              : finalCount > 0
              ? // Display x days from today is <currDate>
                `${finalCount} day${finalCount !== 1 ? `s` : ``} from today is `
              : // Display x days ago was <currDate>
                `${finalCount} day${finalCount !== -1 ? `s` : ``} ago was `
          }
          {currDate.toDateString()}
        </p>
      </div>
    );
  }
}

export default App;
