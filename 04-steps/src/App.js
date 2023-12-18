import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({name:'Junaid'});
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep( (s) => step - 1);
  }

  function handleNext() {
    if (step < 3){
      setStep((s) => step + 1);
      setStep((s) => step + 1);
    } 

    // We can do without using the setTest, but it is not recommended. it is a bad practice
    // test.name = 'junu';

    // setTest({name:'Junu'});
  }

  // const step = 1;
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        {/* <p className="message">
          Step {step} : {messages[step - 1]}{" "}
        </p> */}

        <StepMessage step={step}>
          {messages[step - 1]}{" "}
          <div className="buttons">
            <Button bgColor="#e7e7e7" textColor="#333" onClick={()=>alert('Button clicked')}>Learn How</Button>
          </div>
        </StepMessage>

        <div className="buttons">
          <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}><span></span>Previous</Button>
          <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>Next<span></span></Button>
          
          {/* <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button> */}
        </div>
      </div>
      ) }
    </div>
  )
}

function Button({textColor, bgColor, onClick, children}){
  return (
    <button style={{backgroundColor:bgColor, color:textColor }} onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage( {step, children}){
  return(
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}