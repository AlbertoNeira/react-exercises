import React from 'react';
import UncontrolledLogin from './UncontrolledLogin';

class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  handleLogin = (credentials) => {
    // Perform login logic using the provided credentials
    console.log('Login:', credentials);
  };

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
        <UncontrolledLogin onLogin={this.handleLogin} onReset={this.handleReset} />
      </div>
    );
  }
}

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default InteractiveWelcome;