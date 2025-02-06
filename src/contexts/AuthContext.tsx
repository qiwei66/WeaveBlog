import React, { createContext, useState, useContext, useEffect } from 'react';
import { message } from 'antd';
import axios from 'axios';

interface AuthContextType {
  user: any;
  login: (code: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (code: string) => {
    try {
      // 直接使用 GitHub OAuth API
      // 由于 CORS 限制，我们需要使用代理服务
      const tokenResponse = await axios.post(
          'https://github.com/login/oauth/access_token',
          {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
      );

      const { access_token } = tokenResponse.data;

      // 获取用户信息
      const userResponse = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const user = userResponse.data;
      setUser(user);
      localStorage.setItem('token', access_token);
      message.success('Successfully logged in!');
    } catch (error) {
      message.error('Failed to login');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    message.success('Successfully logged out!');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 验证token并获取用户信息
    }
  }, []);

  return (
      <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
