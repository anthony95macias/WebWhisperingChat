"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userSignup = exports.getAllUsers = void 0;
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
        const existingUser = await User_1.default.findOne({ email });
        if (existingUser)
            return res.status(409).send("User already exists");
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
const userLogin = async (req, res, next) => {
    try {
        //user login
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect password");
        }
        return res.status(200).json({ message: "ok", id: user._id.toString() });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "ERROR", cause: "An error occurred" });
    }
};
exports.userLogin = userLogin;
//# sourceMappingURL=user-controllers.js.map