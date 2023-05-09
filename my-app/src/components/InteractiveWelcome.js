import React from 'react';

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

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default InteractiveWelcome;