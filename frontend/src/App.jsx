// src/App.jsx

import React from 'react';
import './App.css'; // 我们会稍微修改一下这个 CSS 文件
import Register from './components/Register'; // Import the new component
import Login from './components/Login'; // Import Login

function App() {
  // 这是你的主组件
  // 它返回的是 JSX，看起来像 HTML，但实际上是 JavaScript
   const token = localStorage.getItem('token'); // Check if a token exists

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to Your Dutch Learning App</h1>
        {token && <button onClick={handleLogout}>Logout</button>} {/* Show logout if logged in */}
      </header>
      <main className="app-main">
        {!token ? (
          // If NOT logged in, show Register and Login forms
          <div className="auth-forms">
            <Register />
            <Login />
          </div>
        ) : (
          // If LOGGED in, show the protected content
          <div>
            <h2>Dashboard</h2>
            <p>Welcome back! You are now logged in.</p>
            <p>Here you will find your Dutch lessons.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;