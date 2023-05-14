import React from 'react';
import useGithubUser from '../Hooks/useGithubUser';

const GithubUser = ({ username }) => {
  const { userData, isLoading, error } = useGithubUser(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      {userData ? (
        <>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Public Repositories: {userData.public_repos}</p>
          <p>Location: {userData.location}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default GithubUser;