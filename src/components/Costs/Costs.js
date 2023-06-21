import Card from "../UI/Card";
import CostDiagram from "./CostDiagram";
import CostList from "./CostList";
import './Costs.css';
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filterCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filterCosts}/>
        <CostList costs={filterCosts} />
      </Card>
    </div>
  );
};

export default Costs;