import { User } from "../models/user.model.js";


export const addBadge = async (req, res, next) => {
    const { username, badge } = req.body;
        try {
            const user = await User.findOne({username})
            if(!user){
                return res.status(404).json({ response: "user not found"});
            } 
            if (user.badges.includes(badge)){
                return res.status(400).json({ message: "This badge is already yours" });
            }         
            user.badges.push(badge)
            await user.save()
            res.status(201).json({message: "badge was successfully added"})
            
        } catch(error){
            next(error)
        }
    }