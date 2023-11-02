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
    location: String,
    badges:[String],
    /*items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],*/
    pokemon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }],
    mySix: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }],
    campaigns:{
        type: Map,
        of: Boolean,
        default: {}
    },
    items:{
        type: Map,
        of: Number,
        default: {}
    }
}, {timestamps: true})

const skillSchema = new mongoose.Schema({
    level: Number,
    abilities: [String],
    hp: Number,
    damage: Number,
    speed: Number,
    energy: Number
});

const pokemonSchema = new mongoose.Schema({
    name: String,
    skills: skillSchema,
    expToNextLevel: {
        type: Number,
        default: 100
    },
    attacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attack'
    }],
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const attackSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    type: String,
    reload: {
        type: Number,
        default: 0.5
    },
    speed: {
        type: Number,
        default: 1
    },
    dmg: {
        type: Number,
        default: 10
    },
    energyCost: Number,
    sideEf: {
        type: String,
        default: null
    }
})

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    // code string to be used in frontend
    effect: String
})

export const User = new mongoose.model('User', userSchema)
export const Pokemon = new mongoose.model('Pokemon', pokemonSchema)
export const Attack = new mongoose.model('Attack', attackSchema)
export const Item = new mongoose.model('Item', itemSchema)
