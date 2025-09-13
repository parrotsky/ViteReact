// src/App.jsx

import React from 'react';
import './App.css'; // 我们会稍微修改一下这个 CSS 文件

function App() {
  // 这是你的主组件
  // 它返回的是 JSX，看起来像 HTML，但实际上是 JavaScript
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>欢迎来到我的外语学习应用</h1>
        <p>在这里，我们将从零开始，一步步构建全功能应用。</p>
      </header>
      <main className="app-main">
        <h2>当前模块：React 前端搭建</h2>
        <div className="card">
          <h3>第一步：环境配置 ✅</h3>
          <p>PostgreSQL 数据库已在 Docker 中运行。</p>
        </div>
        <div className="card">
          <h3>第二步：前端显示 ✅</h3>
          <p>你现在看到的这个页面就是用 React 构建的。</p>
        </div>
      </main>
    </div>
  );
}

export default App;