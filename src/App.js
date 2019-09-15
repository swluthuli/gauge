import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSpeedometer from "react-d3-speedometer";
import {InputGroup , Input} from 'reactstrap';

class App extends React.Component {
state={
number:''
}

handleChange(value) {

  this.setState({ number: value });
}

  render(){
  return (
    <div className="App" >
      <InputGroup>
      <Input type="number" placeholder ="number" name="number" value={this.state.number} onChange={e=>this.handleChange(e.target.value)} />
      </InputGroup>

      <div style={{ width: "500px", height: "300px",margin: "0 auto", paddingTop: "20px"}}>

    <ReactSpeedometer
        fluidWidth={true}
        minValue={0}
        maxValue={1000}
        value={this.state.number}
        needleColor="steelblue"
        segments={4}
        startColor="#EAAD09"
        ringWidth={20}
        currentValueText={this.state.number + "/ 1000 Points"}
    />
</div>
    </div>
  );
}
}

export default App;
