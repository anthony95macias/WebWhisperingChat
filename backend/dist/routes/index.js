"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_js_1 = __importDefault(require("./user-routes.js")); // This should be the path to your user routes
const chat_routes_js_1 = __importDefault(require("./chat-routes.js")); // This should be the path to your chat routes
const appRouter = (0, express_1.Router)();
// Use the user router for all requests to /user
appRouter.use("/user", user_routes_js_1.default); //domain/api/v1/user
appRouter.use("/chat", chat_routes_js_1.default); //omain/api/v1/chats
exports.default = appRouter;
//# sourceMappingURL=index.js.map