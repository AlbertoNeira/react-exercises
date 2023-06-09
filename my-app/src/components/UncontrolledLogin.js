import React, { useState, useEffect, useRef } from 'react';

const UncontrolledLogin = ({ onLogin, onReset }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameInputRef = useRef(null);

  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

    onLogin({ username, password });

    setUsername('');
    setPassword('');
  };

  const handleReset = (event) => {
    event.preventDefault();

    onReset();

    setUsername('');
    setPassword('');
  };
    
    
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          ref={usernameInputRef}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleReset}>Reset</button>
    </div>)
      
}

export default UncontrolledLogin;