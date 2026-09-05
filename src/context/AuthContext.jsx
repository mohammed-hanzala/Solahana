import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('solahana_token') || null);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');

  // Verify token & restore session on initial load
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('solahana_token');
      if (storedToken) {
        try {
          const response = await authService.getCurrentUser();
          if (response?.data) {
            setUser(response.data);
            setToken(storedToken);
          }
        } catch (error) {
          console.warn('Session restoration failed:', error?.response?.data?.message || error.message);
          localStorage.removeItem('solahana_token');
          setUser(null);
          setToken(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await authService.login({ email, password });
      const userData = response.data.user;
      const userToken = response.data.token;
      
      setUser(userData);
      setToken(userToken);
      setAuthModalOpen(false);
      return { success: true, message: response.message || 'Logged in successfully' };
    } catch (error) {
      const msg = error.response?.data?.message || 'Login failed. Please check your credentials.';
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (formData) => {
    setLoading(true);
    try {
      const response = await authService.register(formData);
      const userData = response.data.user;
      const userToken = response.data.token;

      setUser(userData);
      setToken(userToken);
      setAuthModalOpen(false);
      return { success: true, message: response.message || 'Registration successful' };
    } catch (error) {
      const msg = error.response?.data?.message || 'Registration failed. Please try again.';
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
    } finally {
      setUser(null);
      setToken(null);
      setLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    setLoading(true);
    try {
      const response = await authService.updateProfile(profileData);
      setUser(response.data);
      return { success: true, message: 'Profile updated successfully' };
    } catch (error) {
      const msg = error.response?.data?.message || 'Profile update failed.';
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  const openAuthModal = (tab = 'login') => {
    setAuthModalTab(tab);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    authModalOpen,
    authModalTab,
    openAuthModal,
    closeAuthModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
