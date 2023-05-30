import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

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
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route
          path="/users/:username"
          element={<ShowGithubUser usernames={usernames} />}
        />
      </Routes>
    </div>
  );
};

export default GithubUserList;