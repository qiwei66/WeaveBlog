import React from 'react';
import { List, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './index.module.css';

const mockPosts = [
  {
    id: 1,
    title: 'Getting Started with DeepBlog',
    excerpt: 'Learn how to use DeepBlog to share your thoughts and ideas...',
    createdAt: '2023-11-20',
    author: 'DeepBlog Team'
  },
  {
    id: 2,
    title: 'Markdown Tips and Tricks',
    excerpt: 'Enhance your writing with these powerful Markdown features...',
    createdAt: '2023-11-19',
    author: 'Markdown Expert'
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.container}>
      {isAuthenticated && (
        <div className={styles.actions}>
          <h2>Welcome to DeepBlog</h2>
          <p>Start sharing your thoughts with the world</p>
        </div>
      )}
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
        dataSource={mockPosts}
        renderItem={post => (
          <List.Item>
            <Card
              hoverable
              title={post.title}
              className={styles.card}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span>{post.author}</span>
                <span>{post.createdAt}</span>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
