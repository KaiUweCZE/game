import yummyImg1 from '../../styles/images/countries/yummy1.webp'
import northmadicImg1 from '../../styles/images/countries/northmandic1.webp'
import shireImg1 from '../../styles/images/countries/shire1.webp'
import tinyCaveImg1 from '../../styles/images/countries/cave1.webp'
import barnImg1 from '../../styles/images/countries/barn.webp'
import magicalForImg1 from '../../styles/images/countries/magical-forest1.webp'
import grandpaMoImg1 from '../../styles/images/countries/gmountain1.webp'

export const countryData = [
    {
        countryName: "Magical Forest",
        names: ["Heracross", "Pinsir", "Oranguru", "Hawlucha"]
    },
    {
        countryName: "Tiny Cave",
        names: ["Mimikyu", "Lapras", "Durant", "Tauros"]
    },
    {
        countryName: "Grandpa's Mountains",
        names: ["Skarmory", "Drampa", "Absol", "Zangoose"]
    }
]


export const countries = [
    {
        name:"Magical Forest",
        img: [magicalForImg1],
        about: "Lorem",
        routes: ["Yummy Desert", "Grandpa's Mountains"],
        actions: ["fight"],
        enemies: []   
    },
    {
        name:"Tiny Cave",
        img: [tinyCaveImg1],
        about: "Lorem",
        routes: [],
        actions: ["fight"],
        enemies: []
    },
    {
        name:"Grandpa's Mountains",
        img: [grandpaMoImg1],
        about: "Lorem",
        routes: ["Yummy Desert", "Magical Forest"],
        actions: ["fight"],
        enemies: []
    },
    {
        name:"Willy's Barn",
        img: [barnImg1],
        about: "Lorem",
        routes: [],
        enemies: []
    },
    {
        name: "Te Leport",
        img: [],
        about: "Te Leport is old port in south.",
        routes: ["Northmadic", "Te Leport"]
    },
    {
        name: "Yummy Desert",
        img: [yummyImg1],
        about: "Sooo yummy",
        routes: ["Magical Forest", "Grandpa's Mountains", "Northmadic"]
    },
    {
        name: "Northmadic",
        img: [northmadicImg1],
        about: "Welcome on the North.",
        routes: ["Shire", "Te Leport", "Yummy Desert"]
    },
    {
        name: "Shire",
        img: [shireImg1],
        about: "Deer and foxes are citizens here.",
        routes: ["Northmadic", "Te Leport"]
    }
]