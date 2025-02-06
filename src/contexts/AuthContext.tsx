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
      // 这里应该调用你的后端API来处理GitHub OAuth
      const response = await axios.post('/api/auth/github', { code });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
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
