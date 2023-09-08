import { User, Pokemon } from "../models/user.model.js"
export const test_message = (req, res) => {
    res.json({
        message: "Api example"
    })
}

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

export const addImageProfile = async (req, res, next) => {
    const { username, img } = req.body;
    try{
        const user = await User.findOne({username})
        if (user) {
            user.img = img
            await user.save()
            res.status(200).json({message: user.img})
        } else {
            res.status(404).json({ message: "Ooops!"})
        }
    } catch (error){
        next(error)
    }
}


//need to reconfig
export const addPokemon = async (req, res, next) => {
    const {name, image, skills } = req.body.pokemon;
    const { trainer } = req.body;
    console.log('Request body:', req.body);
    const newPokemon = new Pokemon({name, image, skills})
    try {
        console.log('New Pokemon:', newPokemon);

        const savedPokemon = await newPokemon.save();
        console.log('Saved Pokemon:', savedPokemon);

        const user = await User.findOne({username: trainer})

        if (user) {
            user.pokemon.push(newPokemon);
            await user.save()
            res.status(200).json(user);
        } else{
            res.status(404).json({ message: "User not found"})
        }
    } catch (error) {
        console.error('An error occurred:', error);
        next(error)
    }
}

//make a first campaign
export const campaignProgress = async (req, res, next) => {
    const {username, campaignName} = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            user.campaigns.set(campaignName, true);
            await user.save();
            res.status(200).json({message: "Camapaign was successfull"})
        } else {
            res.status(404).json({ message: "User not found... :("})
        }
    } catch (error) {
        next(error)
    }
}

export const checkCampaign = async (req,res, next) => {
    const {username, campaignName} = req.query;
    try{
        const user = await User.findOne({username})
        if (user) {
            // Zkontrolujeme, zda je kampaň v mapě kampaní a zda je nastavena na `true`
            if (user.campaigns.has(campaignName) && user.campaigns.get(campaignName) === true) {
                res.status(200).json({ message: "Campaign is completed" });
            } else {
                res.status(200).json({ message: "Campaign is not complete" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error){
        next(error)
    }
}


export const getYourPokemons = async (req, res, next) => {
    const {username} = req.query;
    try{
        const user = await User.findOne({username}).populate('pokemon')
        if (user){
            return res.status(200).json({ pokemon: user.pokemon})
        }else{
            return res.status(404).json({ message: 'false'})
        }
    } catch(error){
        next(error)
    }
}