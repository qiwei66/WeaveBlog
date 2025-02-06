import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './index.module.css';

const { Header, Content } = AntLayout;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { key: 'home', label: <Link to="/">Home</Link> },
    ...(isAuthenticated
      ? [
          { key: 'editor', label: <Link to="/editor">Write</Link> },
          { key: 'profile', label: <Link to="/profile">Profile</Link> },
          { key: 'logout', label: 'Logout', onClick: () => {
            logout();
            navigate('/');
          }}
        ]
      : [{ key: 'login', label: <Link to="/login">Login</Link> }])
  ];

  return (
    <AntLayout>
      <Header className={styles.header}>
        <div className={styles.logo}>WeaveBlog</div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          className={styles.menu}
        />
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
    </AntLayout>
  );
};

export default Layout;
