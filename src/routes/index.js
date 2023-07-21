import { Router } from 'express';
import userRouter from './api/user.router.js';
import authRouter from './pages/auth.router.js';
import websiteRouter from './pages/website.router.js';

const router = Router();

// api
router.use('/user', userRouter);

// pages
router.use('/auth', authRouter);
router.use('/', websiteRouter);

export default router;
