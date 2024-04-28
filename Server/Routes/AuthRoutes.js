import express from 'express';
import { test,RegisterUser, LoginUser } from '../Controllers/AuthControllers.js';
import cors from 'cors';

const router = express.Router();


//Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test);
router.post('/signup', RegisterUser);
router.post('/login', LoginUser);
router.get('/profile', LoginUser);

export default router;