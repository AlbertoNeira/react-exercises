import { useState, useEffect } from 'react';

const useGithubUser = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    setIsLoading(true);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError('Failed to fetch user data');
      }

      setIsLoading(false);
    };

  return { userData, isLoading, error, fetchUserData };
};

export default useGithubUser;