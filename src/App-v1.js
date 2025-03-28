import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function prevHandler() {
    if (step > 1) setStep(() => step - 1);
  }

  function nextHandler() {
    if (step < 3) setStep(() => step + 1);
  }

  function closeModalHandler() {
    setIsOpen(!isOpen);
  }

  function Button({ onClick, style, children }) {
    return (
      <button onClick={onClick} style={style}>
        {children}
      </button>
    );
  }

  return (
    <>
      <>
        <button className="close" onClick={closeModalHandler}>
          x
        </button>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step{step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              {/* onClick={()=> setStep(()=> if(step >=1) step -1)} */}
              <Button
                onClick={prevHandler}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                <span>👈</span> Previous
              </Button>
              <Button
                onClick={nextHandler}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next <span>👉</span>
              </Button>
            </div>
          </div>
        )}
      </>
      <YearSteps />
    </>
  );
}

function YearSteps() {
  // Challenge1
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function addStep() {
    setStep(() => step + 1);
  }

  function removeStep() {
    if (step > 0) setStep(() => step - 1);
  }

  function addCount() {
    setCount(() => count + step);
  }

  function removeCount() {
    setCount(() => count - step);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Year steps challenge</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={removeStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={addStep}>+</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={removeCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={addCount}>+</button>
      </div>
      <h2 id="year-step-text" style={{ textAlign: "center" }}>
        {count === 0 && "Today is "}
        {count === 1 && "Tomorrow is "}
        {count > 1 && `${count} days from today is `}
        {count === -1 && "Yesterday was "}
        {count < -1 && `${-1 * count} days from today was `}
        {`${new Date(+new Date() + count * 86400000).toDateString()}`}
      </h2>
    </>
  );
}
