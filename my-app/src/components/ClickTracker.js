import React from 'react';

class ClickTracker extends React.Component {
 state = {
      lastButtonPressed: ''
    };
  

  handleClick = (event) => {
    const buttonId = event.target.id;
    this.setState({
      lastButtonPressed: buttonId
    });
  };

  render() {
    return (
      <div>
        <h1>Last Button Pressed: {this.state.lastButtonPressed}</h1>
        <button id="button1" onClick={this.handleClick}>Button 1</button>
        <button id="button2" onClick={this.handleClick}>Button 2</button>
        <button id="button3" onClick={this.handleClick}>Button 3</button>
      </div>
    );
  }
}

export default ClickTracker;