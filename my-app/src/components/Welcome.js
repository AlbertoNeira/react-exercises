import React, { Component } from 'react';
import Age from './Age';

class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age>18 
          ?<Age age={this.props.age}/>
          :<h3>You are very young</h3>}
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Stranger',
    
  };
  
export default Welcome;