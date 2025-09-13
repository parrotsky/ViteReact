// backend/src/index.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

// 加载环境变量
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// 中间件配置
app.use(cors()); // 允许所有来源的跨域请求 (开发环境中)
app.use(express.json()); // 解析请求体中的 JSON 数据

// 路由配置
app.use('/api/users', userRoutes);

// 根路由，用于测试服务器是否运行
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on http://localhost:${port}`);
});

