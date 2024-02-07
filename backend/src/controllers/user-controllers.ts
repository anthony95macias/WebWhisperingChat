import  User from "../models/User";
import { Request, Response, NextFunction } from "express";
import { hash, compare}  from "bcrypt";
import { createToken } from "../utils/token-manager";
import { COOKIE_NAME } from "../utils/constant";

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
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(409).send("User already exists");
        const hashedPassword = await hash(password, 10);
        const user = new User({name, email, password: hashedPassword});
        await user.save();

        // create token and store cookie
        res.clearCookie(COOKIE_NAME, {
            path: "/", 
            domain: "localhost", 
            httpOnly: true,
            signed: true,
        });
    
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME , token, {
            path: "/", 
            domain: "localhost", 
            expires,
            httpOnly: true,
            signed: true,
        });
        return res.status(201).json({message:"ok", id: user._id.toString()});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"ERROR", cause: "An error occurred" });
    }
};

export const userLogin = async (
    req:Request, 
    res:Response, 
    next:NextFunction
    ) => {
    try {
        //user login
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send("User not found" );
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect password");
        }

    // create token and store cookie
    res.clearCookie(COOKIE_NAME, {
        path: "/", 
        domain: "localhost", 
        httpOnly: true,
        signed: true,
    });

    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME , token, {
        path: "/", 
        domain: "localhost", 
        expires,
        httpOnly: true,
        signed: true,
    });

        return res.status(200).json({message:"ok", id: user._id.toString()});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"ERROR", cause: "An error occurred" });
    }
};