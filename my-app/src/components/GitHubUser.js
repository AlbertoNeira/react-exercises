import React, {useState} from 'react';
import useGithubUser from '../Hooks/useGithubUser';

const GithubUser = () => {
  const [username, setUsername] = useState('');
  const { userData, isLoading, error, fetchUserData } = useGithubUser(username);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFetchUser = () => {
    fetchUserData(username);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleInputChange} />
      <button onClick={handleFetchUser}>Fetch User</button>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Repositories: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;