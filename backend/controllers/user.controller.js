import { User, Pokemon } from "../models/user.model.js"
export const test_message = (req, res) => {
    res.json({
        message: "Api example"
    })
}

//choice img profile
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


//add pokemon to all of your's pokemons
export const addPokemon = async (req, res, next) => {
    const {name, skills, attacks, expToNextLevel } = req.body.pokemon;
    const { trainer } = req.body;
    console.log('Request body:', req.body);
    const newPokemon = new Pokemon({name, skills, attacks})
    try {
        console.log('New Pokemon:', newPokemon);

        const savedPokemon = await newPokemon.save();
        console.log('Saved Pokemon:', savedPokemon);

        const user = await User.findOne({username: trainer})

        if (user) {
            user.pokemon.push(newPokemon);
            await user.save()
            res.status(200).json({ user, newPokemonId: newPokemon._id });
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

export const getUser = async (req, res, next) => {
    const { username } = req.query;
    try{
        const user = await User.findOne({ username })
        if (user) {
            return res.status(200).json({ user })
        } else {
            return res.status(404).json({ message: 'get user failed'})
        }
    } catch(error){
        next(error)
    }
}


//gets all of your pokemons
export const getYourPokemons = async (req, res, next) => {
    const {username} = req.query;
    try{
        const user = await User.findOne({username})
                    .populate({
                      path: 'pokemon',
                      populate: { path: 'attacks' }
                    });
        if (user){
            return res.status(200).json({ pokemon: user.pokemon})
        }else{
            return res.status(404).json({ message: 'false'})
        }
    } catch(error){
        next(error)
    }
}

//pokemon whose are not in six
export const pokemonsInBox = async (req, res, next) => {
    const {username} = req.query;
    try {
        const user = await User.findOne({username})
                            .populate({
                                path: 'pokemon',
                                populate: { path: 'attacks' }
                            });
        
        if (user) {
            const sixPokemonIds = user.mySix.map(p => p.toString());
            const pokemonsInBox = user.pokemon.filter(p => !sixPokemonIds.includes(p._id.toString()));
            return res.status(200).json({ pokemon: pokemonsInBox });
        } else {
            return res.status(404).json({ message: "User not found"});
        }
    } catch (error) {
        next(error);
    }
};

//funcs for pokemon's six
//add pokemon to your six
export const addToSix = async (req, res, next) => {
    console.log('Request body:', req.body);
    const _id = req.body.pokemon;
    const { username } = req.body;
    try{
        const pokemon = await Pokemon.findById(_id)
        const user = await User.findOne({username: username})

        if (!user) {
            console.log('User not found:', username);
            return res.status(404).json({ message: "Upsss, user" });
        }

        if (!pokemon) {
            console.log('Pokemon not found:', _id);
            return res.status(404).json({ message: "Upsss, pokemon" });
        }

        if (user.mySix.includes(_id) || user.mySix.length >= 6){
            return res.status(400).json({message: 'you cannot add this pokemon'})
        }

        user.mySix.push(_id);
        await user.save()

        res.status(200).json({ message:'Pokemon was added!'})
    } catch (error){
        next(error)
    }

}

//get pokemons from six(0-6)
export const getSix = async (req, res, next) => {
    const {username} = req.query;
    console.log('Method getSix was called');
    console.log('Query Parameters:', req.query);
    try {
        const user = await User.findOne({username}).populate({
            path: 'mySix',
            populate: { path: 'attacks' }
          })
        if(user){
            return res.status(200).json({ mySix: user.mySix})
        } else {
            return res.status(404).json({ message: 'Ouha getSix failed'})
        }
    } catch (error) {
        next(error)
    }

}

//remove pokemon from six to pokemon box(something that)
export const removeFromSix = async (req, res, next) => {
    const { username, mySix: _id } = req.query;
    console.log("Methods removeFromSix was called");
    try {
        const user = await User.findOne({username}).populate('mySix')
        console.log(user);
        if(!user){
            return res.status(404).json({ message: "User not found"})
        }

        if(!user.mySix.some(pokemon => pokemon._id.toString() === _id)){
            return res.status(404).json({message: "Pokemon not found"})
        }

        user.mySix.pull(_id);

        await user.save()

        res.status(200).json({message: "Pokemon was removed from Six"})
    } catch (error) {
        next(error)
    }
}