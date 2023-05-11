import React from 'react';
import Login from './Login';

class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleReset = () => {
    this.setState({
      name: ''
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <Welcome name={this.state.name} />
        <Login onReset={this.handleReset} />
      </div>
    );
  }
}

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default InteractiveWelcome;