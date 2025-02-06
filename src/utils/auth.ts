const DEPLOY_URL = 'https://larkgit.github.io/weave-blog';

export const getGitHubAuthUrl = () => {
  const clientId = process.env.CLIENT_ID;
  const redirectUri = encodeURIComponent(DEPLOY_URL);
  return `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=gist,user`;
};

export const parseGitHubCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
};
