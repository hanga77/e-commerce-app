import express from 'express';
import { GetUser } from '../Controllers/Users.js';

const userRouter = express.Router();

userRouter.post('/signin', GetUser);

export default userRouter;
