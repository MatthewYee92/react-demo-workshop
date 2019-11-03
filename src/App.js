import React, { Component } from 'react'
import Count from './components/Count'

class App extends Component {
  constructor(){
    super()
    // define method that changes state(name) to corbin
    // edit reset method to reset state of name
    this.state={
      value: 0,
      name: ''
    }
  }
  // Define our methods
  increment = () => {
    this.setState({
      value: this.state.value + 1
    })
  }
  // decrement count(value)
  decrement = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  //reset state
  resetState = () => {
    this.setState({
      value: 0,
      name: ''
    })
  }

  nameChange = () => {
    this.setState({
      name: 'Corbin'
    })
  }


  render() {
    // destruct area 
    const { value, name } = this.state;
    const { nameChange, increment, decrement, resetState } = this;
    return (
      <div>
        {/* Our components reside here */}
        <Count name={name} nameChange={nameChange} increment={increment} decrement={decrement} value={value} resetState={resetState}/>
      </div>
    )
  }
}

export default App