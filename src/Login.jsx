import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Or the path to your CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      alert('Login Successful');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials, please try again');
    }
  };

  return (
    <div>
      
      <div className="login-container">
      <h2 className="login-title">Welcome!</h2> 
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}

export default Login;
