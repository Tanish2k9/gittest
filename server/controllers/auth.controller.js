import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp=async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcrypt.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});

    try {
        await newUser.save();
        res.status(201).json({
            success:true,
            message:"user create successfully"
        })
    } catch (error) {
        next(error);
    }
    
}


export const signIn = async(req,res,next)=>{
    try {
        const {email,password} = req.body;

        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,"user Not found"));

        const validPassword = await bcrypt.compare(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,"Wrong credentials"));
        const {password: hashedPassword, ...rest} = validUser._doc;

        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        res.cookie('access_token',token,{httpOnly:true,maxAge:36000000}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}