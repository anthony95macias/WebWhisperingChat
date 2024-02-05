import { Router } from 'express';
import { getAllUsers } from '../controllers/user-controllers.js';
import { userSignup } from '../controllers/user-controllers.js';
import {validate, signupValidator} from '../utils/validator.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post("/signup", validate(signupValidator), userSignup);

export default userRouter;