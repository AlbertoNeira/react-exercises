import React, { useEffect, useState } from 'react';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log('Error fetching GitHub user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

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