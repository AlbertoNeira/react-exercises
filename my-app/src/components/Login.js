import React, { useState } from 'react';



const Login = ({ onLogin, onReset }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const isButtonDisabled = username === '' || password === '';

  const handleLogin = () => {
    // Call the onLogin function with the current state
    onLogin({ username, password });
  };
  
  const handleReset = () => {
    setUsername('');
    setPassword('');
    onReset()
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isButtonDisabled} onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Login;