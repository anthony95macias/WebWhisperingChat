"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getAllUsers = async (req, res, next) => {
    try {
        // get all users
        const users = await User_1.default.find({});
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "ERROR", cause: "An error occurred" });
    }
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user-controllers.js.map