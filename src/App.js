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

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          id="step"
          name="step"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label htmlFor="step"> {step}</label>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
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
