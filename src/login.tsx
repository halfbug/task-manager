import React, { useState } from 'react';
import { useAuth } from './auth.context';
import axios from 'axios';
import { userAPI } from './api/user';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    setError('');

    try {
      // Call the mock API to authenticate the user
      const response = await userAPI.post('/login', { username, password });
      const user = response.data;
      login(user.group);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginPage;
