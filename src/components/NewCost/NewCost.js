import CostForm from './CostForm';
import './NewCost.css';
import React, {useState} from 'react';

const NewCost = (props) => {
  const [isFormVisile, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='new-cost'>
      {!isFormVisile && <button onClick={inputCostDataHandler}>Add new cost</button>}
      {isFormVisile && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />}
    </div>
  );
};

export default NewCost;