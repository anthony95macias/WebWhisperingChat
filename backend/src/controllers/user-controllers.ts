import  User from "../models/User";
import { Request, Response, NextFunction } from "express";

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