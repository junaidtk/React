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

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return(
    <div>
      <div>
        <button className='btn' onClick={()=> setStep((c)=> c - 1)}>+</button>
        <span>Step : {step}</span>
        <button className='btn' onClick={()=> setStep((c)=> c + 1)}>+</button>
      </div>

      <div>
        <button className='btn' onClick={()=> setCount((c)=> c - step)}>+</button>
        <span>Count : {count}</span>
        <button className='btn' onClick={()=> setCount((c)=> c + step)}>+</button>
      </div>  

      <p>
        <span>
          {count === 0 ? "Today is " : count > 0 ? `${count} days from today ` : `${count} days ago was `
          }
        </span>
        <span>{date.toDateString()}</span>
      </p>

    </div>    
  );
}

export default App;
