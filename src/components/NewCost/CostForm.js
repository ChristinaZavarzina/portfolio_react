import './CostForm.css';
import React, {useState} from 'react';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const datChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    };
    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
  <form onSubmit={submitHandler}>
    <div className="new-cost__controls">
      <div className="new-cost__control">
        <label>Name/Title</label>
        <input type="text" value={inputName} onChange={nameChangeHandler}/>
      </div>
      <div className="new-cost__control">
        <label>Sum/Price</label>
        <input type="number" value={inputAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
      </div>
      <div className="new-cost__control">
        <label>Date</label>
        <input type="date" value={inputDate} onChange={datChangeHandler} min='2019-01-0' step='2023-12-31'/>
      </div>
      <div className="new-cost__actions">
        <button type="submit" >Add costs</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  </form>);
}

export default CostForm;