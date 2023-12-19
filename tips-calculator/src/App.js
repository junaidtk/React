import { useState } from "react"

export default function App(){
  return(
    <div className="app">
      <TipsCalculator />
    </div>
  );
}

function TipsCalculator(){
  const [bill, setBill] = useState();
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (percentage1 +  percentage2)/2*100

  function handleReset(){
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return(
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage1={percentage1} onSelect={setPercentage1}>How did you like the service?</SelectPercentage>
      <SelectPercentage percentage2={percentage2} onSelect={setPercentage2}>How did your friend like the service?</SelectPercentage>
      <Output bill={bill} tip={tip}/>
      <Reset onReset={handleReset}/>
    </div>
  );
}

function BillInput({bill, onSetBill}){

  return(
    <div>
      <label>How much was the bill?</label>
      <input type="text" value={bill} onChange={(e)=> onSetBill(Number(e.target.value))} placeholder="Bill value"/>
    </div>
  );
  
}

function SelectPercentage({children,  percentage, onSelect}){
  return(
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e)=> onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({bill, tip}){
  return (
    <div>
      <p>You pay ${bill + tip} (${bill} + ${tip} tip)</p>
    </div>
  );
}

function Reset({onReset}){
  return(
    <button onClick={onReset}>Reset</button>
  );
}