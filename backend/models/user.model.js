import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: String,
    pokemon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }],
    campaigns:{
        type: Map,
        of: Boolean,
        default: {}
    },
}, {timestamps: true})

const SkillsSchema = new mongoose.Schema({
    level: Number,
    abilities: String,
    hp: Number,
    attack: Number
});

const pokemonSchema = new mongoose.Schema({
    name: String,
    image: String,
    skills: SkillsSchema,
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const User = new mongoose.model('User', userSchema)
export const Pokemon = new mongoose.model('Pokemon', pokemonSchema)
