import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm.js';
import Home from './Home.js';
function LoginHandler() {
  const [token, setToken] = useState(null);
  //let activeToken = localStorage.getItem('notefy_token');

  useEffect(() => {
    const activeToken = localStorage.getItem('notefy_token');
    if (activeToken) {
      setToken(activeToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
    // Store token in local storage
    localStorage.setItem('notefy_token', newToken);
  };

  return (
    <div>
      <h1>My App</h1>
      {token ? (
        <Home></Home>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default LoginHandler;
