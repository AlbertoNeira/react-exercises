import useSWR from 'swr';

const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

const useGithubUser = (username) => {
  const { data: userData, error } = useSWR(username, fetchUserData);

  return {
    userData,
    isLoading: !userData && !error,
    error,
    fetchUserData,
  };
};

export default useGithubUser;