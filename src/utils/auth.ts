const DEPLOY_URL = 'https://larkgit.github.io/weave-blog';

export const getGitHubAuthUrl = () => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  // 使用固定的部署 URL 而不是动态获取
  const redirectUri = encodeURIComponent(DEPLOY_URL);
  return `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=gist,user`;
};

export const parseGitHubCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
};
