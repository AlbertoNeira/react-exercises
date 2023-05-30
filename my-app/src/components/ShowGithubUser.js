import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGithubUser from '../Hooks/useGithubUser';

function ShowGithubUser() {
  const { username } = useParams();
  const { userData, isLoading, error, fetchUserData } = useGithubUser();

  useEffect(() => {
    fetchUserData(username);
  }, [fetchUserData, username]);

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
    </div>
  );
}

export default ShowGithubUser;