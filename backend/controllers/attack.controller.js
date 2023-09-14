import { Attack } from "../models/user.model.js";

export const postAttack = async (req, res, next) => {
    const { name, type, reload, speed, dmg } = req.body;
    const newAttack = new Attack({ name, type, reload, speed, dmg })
    try {
        await newAttack.save()
        res.status(201).json({message: "attack was successfully created"})
    } catch(error){
        next(error)
    }
}