import { Router } from "express";
import userRouter from "./user-routes.js" // This should be the path to your user routes
import chatRouter from "./chat-routes.js" // This should be the path to your chat routes

const appRouter = Router();

// Use the user router for all requests to /user
appRouter.use("/user", userRouter); //domain/api/v1/user
appRouter.use("/chat", chatRouter); //omain/api/v1/chats

export default appRouter;
