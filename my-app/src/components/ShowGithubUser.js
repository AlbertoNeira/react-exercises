import React, { useEffect } from 'react';
import useGithubUser from '../Hooks/useGithubUser';
import { useParams } from 'react-router-dom';

const ShowGithubUser = () => {
  const { userData, isLoading, error, fetchUserData } = useGithubUser();
  const { username } = useParams();

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
};

export default ShowGithubUser;