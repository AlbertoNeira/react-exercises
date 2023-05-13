import React, { useState } from 'react';
import GitHubUser from './GitHubUser';

const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleAddUser = () => {
    if (newUsername.trim() !== '') {
      setUsernames((prevUsernames) => [...prevUsernames, newUsername]);
      setNewUsername('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newUsername}
        onChange={handleInputChange}
        placeholder="Enter a GitHub username"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {usernames.map((username, index) => (
          <li key={index}>
            <GitHubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;