import React, { useEffect } from 'react';
import useGithubUser from '../Hooks/useGithubUser';

const ShowGithubUser = ({ username }) => {
  const { userData, isLoading, error, fetchUserData } = useGithubUser(username);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleFetchUser = () => {
    fetchUserData();
  };

  return (
    <div>
      <h2>Show Github User</h2>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {userData && (
        <div>
          <h3>Github User: {userData.login}</h3>
          <p>Name: {userData.name}</p>
          <p>Followers: {userData.followers}</p>
          <p>Repositories: {userData.public_repos}</p>
        </div>
      )}

      <button onClick={handleFetchUser}>Fetch User Data</button>
    </div>
  );
};

export default ShowGithubUser;