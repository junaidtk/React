import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset(){
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return(
    <div>
      <div>
        <input type='range' min='0' max='10' value={step} onChange={((e) => setStep(Number(e.target.value)))} />
        <span>Step : {step}</span>
      </div>

      <div>
        <button className='btn' onClick={()=> setCount((c)=> c - step)}>+</button>
        <input type="text" value={count} />
        <button className='btn' onClick={()=> setCount((c)=> c + step)}>+</button>
      </div>  

      <p>
        <span>
          {count === 0 ? "Today is " : count > 0 ? `${count} days from today ` : `${count} days ago was `
          }
        </span>
        <span>{date.toDateString()}</span>
      </p>
      
      { (count !== 0 || step !== 1 ) ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null } 
      

    </div>    
  );
}

export default App;
