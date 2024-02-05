import { Router } from 'express';
import { getAllUsers } from '../controllers/user-controllers.js';
import { userSignup } from '../controllers/user-controllers.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post("/signup", userSignup);

export default userRouter;