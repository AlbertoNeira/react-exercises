import React, { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
      
      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count + 1
          }));
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
  render() {
    return (
      <div>
        <h1>This is the count: {this.state.count}</h1>
      </div>
    );
  }
}


  
export default Counter;