import React, { Component } from 'react';
import Age from './Age';

class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age>18
          ?<Age age={this.props.age}/>
          :<h1>U are under age</h1>}
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Stranger',
    age: 24
  };
  
export default Welcome;