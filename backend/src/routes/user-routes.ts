import { Router } from 'express';
import { getAllUsers, userLogin } from '../controllers/user-controllers.js';
import { userSignup } from '../controllers/user-controllers.js';
import {validate, signupValidator, LoginValidator} from '../utils/validator.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(LoginValidator), userLogin);

export default userRouter;