import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Stranger',
    age: 24
  };
  
export default Welcome;