"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_js_1 = require("../controllers/user-controllers.js");
const user_controllers_js_2 = require("../controllers/user-controllers.js");
const validator_js_1 = require("../utils/validator.js");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_controllers_js_1.getAllUsers);
userRouter.post("/signup", (0, validator_js_1.validate)(validator_js_1.signupValidator), user_controllers_js_2.userSignup);
exports.default = userRouter;
//# sourceMappingURL=user-routes.js.map