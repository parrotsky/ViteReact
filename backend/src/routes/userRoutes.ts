// backend/src/routes/userRoutes.ts

import { Router } from 'express';
import bcrypt from 'bcrypt';
import pool from '../db';

const router = Router();

// POST /api/users/register - 用户注册接口
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // 1. 基本验证
  if (!email || !password) {
    return res.status(400).json({ message: '邮箱和密码不能为空' });
  }

  try {
    // 2. 检查用户是否已存在
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(409).json({ message: '该邮箱已被注册' }); // 409 Conflict
    }

    // 3. 密码加密
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // 4. 将新用户存入数据库
    const newUser = await pool.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at',
      [email, passwordHash]
    );

    // 5. 返回成功响应
    res.status(201).json(newUser.rows[0]);

  } catch (error) {
    console.error('注册失败:', error);
    res.status(500).json({ message: '服务器内部错误' });
  }
});

export default router;
