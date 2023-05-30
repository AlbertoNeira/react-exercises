import useSWR from 'swr';

const fetchUserData = async (username) => {
  if (!username) {
    console.log('Username is null');
    return null;
  }

  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

const useGithubUser = (username) => {
  const { data: userData, error, revalidate } = useSWR(username, fetchUserData);

  const handleFetchUserData = async () => {
    revalidate(); // Trigger a re-fetch of the data
  };

  return {
    userData,
    isLoading: !userData && !error,
    error,
    fetchUserData: handleFetchUserData,
  };
};

export default useGithubUser;
