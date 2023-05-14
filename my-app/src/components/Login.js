import React from 'react';
import useLogin from '../Hooks/useLogin';

const Login = () => {
  const { username, password, handleUsernameChange, handlePasswordChange, reset } = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with username and password values
    console.log('Username:', username);
    console.log('Password:', password);
  };
  
  const handleReset = () => {
    reset(); // Call the reset function to clear the username and password
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Login;