import DiagramBar from "./DiagramBar";
import './Diagram.css';

const Diagram = (props) => {
  const dataSetsValue = props.dataSets.map(data => data.value);

  const maxMonthCosts = Math.max(...dataSetsValue);

  return <div className="diagram">
    {props.dataSets.map(dataSet => <DiagramBar 
      key={dataSet.label}
      value={dataSet.value} 
      maxValue={maxMonthCosts} 
      label={dataSet.label} />)}
  </div>
};

export default Diagram;