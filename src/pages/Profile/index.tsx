import React from 'react';
import { Card, Avatar, Tabs } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';
import styles from './index.module.css';

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <Card className={styles.profile}>
        <div className={styles.header}>
          <Avatar size={64} icon={<UserOutlined />} src={user?.avatar_url} />
          <h2>{user?.name || 'GitHub User'}</h2>
          <p>{user?.bio || 'No bio available'}</p>
        </div>
        
        <Tabs defaultActiveKey="posts">
          <TabPane tab="Posts" key="posts">
            <div className={styles.content}>
              <p>Your posts will appear here</p>
            </div>
          </TabPane>
          <TabPane tab="Drafts" key="drafts">
            <div className={styles.content}>
              <p>Your drafts will appear here</p>
            </div>
          </TabPane>
          <TabPane tab="Settings" key="settings">
            <div className={styles.content}>
              <p>Settings will appear here</p>
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Profile;
