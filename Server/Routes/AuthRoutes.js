import express from 'express';
import { test,RegisterUser, LoginUser,getProfile,UpdatedUser, LogoutUser } from '../Controllers/AuthControllers.js';
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
router.get('/profile', getProfile);
router.put('/profile', UpdatedUser);
router.post('/logout', LogoutUser);


export default router;