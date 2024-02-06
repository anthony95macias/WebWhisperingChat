"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignup = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = require("bcrypt");
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
const userSignup = async (req, res, next) => {
    try {
        //user signup
        const { name, email, password } = req.body;
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = new User_1.default({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: "ok", id: user._id.toString() });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "ERROR", cause: "An error occurred" });
    }
};
exports.userSignup = userSignup;
//# sourceMappingURL=user-controllers.js.map