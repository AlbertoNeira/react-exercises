import React, { Component } from 'react';
import Age from './Age';

class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age>18 && this.props.age<65
          ?<Age age={this.props.age}/>
          :<h3>Your age is unkown</h3>}
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Stranger',
    
  };
  
export default Welcome;