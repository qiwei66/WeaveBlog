import React from 'react';
import { Button, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styles from './index.module.css';

const Login: React.FC = () => {
  const handleGitHubLogin = () => {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = encodeURIComponent(window.location.origin);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return (
    <div className={styles.container}>
      <Card title="Welcome to DeepBlog" className={styles.card}>
        <Button
          type="primary"
          icon={<GithubOutlined />}
          size="large"
          onClick={handleGitHubLogin}
          className={styles.button}
        >
          Login with GitHub
        </Button>
      </Card>
    </div>
  );
};

export default Login;
