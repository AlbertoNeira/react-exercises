import React, { Component } from 'react';

class Age extends Component {
  render() {
    return (
      <div>
      
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}

Age.defaultProps = {
   
  
  };
  

  
export default Age;