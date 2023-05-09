import React, { Component } from 'react';
import Age from './Age';

class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <Age/>
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Stranger',
    age: 24
  };
  
export default Welcome;