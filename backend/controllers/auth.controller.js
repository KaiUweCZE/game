import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandeler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const regist = async (req, res, next) => {
    const { username, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, password: hashedPassword })
    try {
        await newUser.save();
        res.status(201).json({message: "Successfully created"})
    } catch (error) {
        next(error)
    }
    
}

export const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const validUser = await User.findOne({ username: username })
        if (!validUser) return next(errorHandler(404, "USer not found"))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, "Oops wrong password..."))
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        res.cookie('acces_token', token, {httpOnly: true})
        .status(200).json(validUser)
    } catch (error) {
        next(error)
    }
}

export const logout = async (req,res) => {
    res.clearCookie('acces_token').status(200).json('You was signed out successfully! ')
}