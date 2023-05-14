import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
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

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return { userData, isLoading, error };
};

export default useGithubUser;