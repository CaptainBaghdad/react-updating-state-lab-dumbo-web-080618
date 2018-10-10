// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component{
  
  state = {
    timesClicked: 0
  }
  
  handleClick(){
    let val = this.state.timesClicked;
    
    this.setState({
      timesClicked: val+1
    })
  }
  
  
  render(){
    
    return (
      <button> {this.state.timesClicked }</button>
      )
    
    
  }
  
  
}


export default DigitalClicker;
