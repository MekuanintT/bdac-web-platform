import React, { createContext, useState, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for an existing session on load
    const userJson = localStorage.getItem('ac_user');
    if (userJson) {
      try {
        setCurrentUser(JSON.parse(userJson));
      } catch (e) {
        console.error("Failed to parse user session", e);
      }
    }
    setLoading(false);
  }, []);

  const sendNotification = async (name, email, type) => {
    if (EMAIL_CONFIG.SERVICE_ID && EMAIL_CONFIG.PUBLIC_KEY && type === 'register') {
      const templateId = EMAIL_CONFIG.REGISTER_TEMPLATE_ID || EMAIL_CONFIG.TEMPLATE_ID;

      try {
        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          templateId,
          {
            name: name,
            email: email,
            title: 'Welcome to American Corner',
            date: new Date().toLocaleString(),
            message: 'Your account has been successfully created. You can now book events and workshops!',
          },
          EMAIL_CONFIG.PUBLIC_KEY
        );
      } catch (err) {
        console.error('Failed to send registration notification:', err);
      }
    }
  };

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Mock login validation
      setTimeout(async () => {
        const usersJson = localStorage.getItem('ac_users_db');
        const users = usersJson ? JSON.parse(usersJson) : [];

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          const sessionUser = { name: user.name, email: user.email, password: user.password };
          setCurrentUser(sessionUser);
          localStorage.setItem('ac_user', JSON.stringify(sessionUser));

          resolve(sessionUser);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 800);
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      // Mock registration
      setTimeout(async () => {
        const usersJson = localStorage.getItem('ac_users_db');
        const users = usersJson ? JSON.parse(usersJson) : [];

        if (users.find(u => u.email === email)) {
          reject(new Error("Email already registered"));
          return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('ac_users_db', JSON.stringify(users));

        const sessionUser = { name, email, password };
        setCurrentUser(sessionUser);
        localStorage.setItem('ac_user', JSON.stringify(sessionUser));

        // Send notification
        sendNotification(name, email, 'register');

        resolve(sessionUser);
      }, 800);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('ac_user');
  };

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
