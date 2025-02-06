export const getGitHubAuthUrl = () => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = encodeURIComponent(window.location.origin);
  return `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=gist`;
};

export const parseGitHubCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
};
