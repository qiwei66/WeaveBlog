import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getUserProfile = async () => {
  const response = await api.get('/user');
  return response.data;
};

export const createGistPost = async (title: string, content: string) => {
  const response = await api.post('/gists', {
    description: title,
    public: true,
    files: {
      [`${title}.md`]: {
        content: content
      }
    }
  });
  return response.data;
};

export const getGistPosts = async () => {
  const response = await api.get('/gists');
  return response.data;
};
