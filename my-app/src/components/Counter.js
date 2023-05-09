import React, { Component } from 'react';


function CounterDisplay(props){
    return  <h1>This is the count: {props.count}</h1>
}
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count:this.props.initialValue
        };
        
      }
      
      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count + this.props.incrementAmount
          }));
        }, this.props.incrementInterval);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
  render() {
    return (
      <div>
         <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}


  
export default Counter;