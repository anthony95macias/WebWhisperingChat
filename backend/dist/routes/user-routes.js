"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_js_1 = require("../controllers/user-controllers.js");
const user_controllers_js_2 = require("../controllers/user-controllers.js");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_controllers_js_1.getAllUsers);
userRouter.post("/signup", user_controllers_js_2.userSignup);
exports.default = userRouter;
//# sourceMappingURL=user-routes.js.map