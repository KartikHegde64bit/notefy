import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
    // Store token in local storage
    localStorage.setItem('token', newToken);
  };

  return (
    <div>
      <h1>My App</h1>
      {token ? (
        <p>User is logged in</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
