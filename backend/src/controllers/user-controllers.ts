import  User from "../models/User";
import { Request, Response, NextFunction } from "express";
import { hash}  from "bcrypt";

export const getAllUsers = async (
    req:Request, 
    res:Response, 
    next:NextFunction
    ) => {
    try {
        // get all users
        const users = await User.find({});
        return res.status(200).json({message:"ok",users});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"ERROR", cause: "An error occurred" });
    }
};

export const userSignup = async (
    req:Request, 
    res:Response, 
    next:NextFunction
    ) => {
    try {
        //user signup
        const {name,email, password} = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({name, email, password: hashedPassword});
        await user.save();
        return res.status(200).json({message:"ok", id: user._id.toString()});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"ERROR", cause: "An error occurred" });
    }
};