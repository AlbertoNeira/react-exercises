import React from 'react';
import CounterDisplay from './CounterDisplay';


class Counter extends React.Component {            //constructor no longer required
  state = {
    count: this.props.initialValue
  };

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