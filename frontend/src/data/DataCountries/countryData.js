import yummyImg1 from '../../styles/images/countries/yummy1.webp'
import northmadicImg1 from '../../styles/images/countries/northmandic1.webp'
import shireImg1 from '../../styles/images/countries/shire1.webp'
import tinyCaveImg1 from '../../styles/images/countries/cave1.webp'
import barnImg1 from '../../styles/images/countries/barn.webp'
import magicalForImg1 from '../../styles/images/countries/magical-forest1.webp'
import grandpaMoImg1 from '../../styles/images/countries/gmountain2.webp'
import teleportImg1 from '../../styles/images/countries/teleport1.webp'
import machupichuImg1 from '../../styles/images/countries/machopichu1.webp'
import icesreamImg1 from '../../styles/images/countries/iceScream1.webp'
import lovelyImg1 from '../../styles/images/countries/lovely1.webp'
import jungleImg1 from '../../styles/images/countries/jungle1.webp'
import redwoodsImg1 from '../../styles/images/countries/redwoods1.webp'

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
        id: "c01",
        name:"Magical Forest",
        img: [magicalForImg1],
        about: "Lorem",
        routes: ["Yummy Desert", "Grandpa's Mountains", "Tiny Cave"],
        actions: ["fight"],
        enemies: []   
    },
    {
        id: "c02",
        name:"Tiny Cave",
        img: [tinyCaveImg1],
        about: "Lorem",
        routes: ["Magical Forest", "Willy's Barn", "Jungle"],
        actions: ["fight"],
        enemies: []
    },
    {
        id: "c03",
        name:"Grandpa's Mountains",
        img: [grandpaMoImg1],
        about: "Lorem",
        routes: ["Yummy Desert", "Magical Forest"],
        actions: ["fight"],
        enemies: []
    },
    {
        id: "c04",
        name:"Willy's Barn",
        img: [barnImg1],
        about: "Lorem",
        routes: ["Tiny Cave", "Jungle", "Redwoods"],
        enemies: []
    },
    {
        id: "c05",
        name: "Jungle",
        img: [jungleImg1],
        about: "lorem",
        routes: ["Willy's Barn", "Tiny Cave"],
        enemies: [],
        actions: [],
    },
    {
        id: "c06",
        name: "Redwoods",
        img: [redwoodsImg1],
        about: "lorem",
        routes: ["Willy's Barn"],
        enemies: [],
        actions: [],
    },
    {
        id: "c07",
        img: [],
        about: "lorem",
        routes: [],
        enemies: [],
        actions: [],
    },
    {
        id: "c08",
        img: [],
        about: "lorem",
        routes: [],
        enemies: [],
        actions: [],
    },
    {
        id: "c09",
        img: [],
        about: "lorem",
        routes: [],
        enemies: [],
        actions: [],
    },
    {
        id: "c10",
        img: [],
        about: "lorem",
        routes: [],
        enemies: [],
        actions: [],
    },
    {
        id: "c11",
        img: [],
        about: "lorem",
        routes: [],
        enemies: [],
        actions: [],
    },
    {
        id: "t01",
        name: "Te Leport",
        img: [teleportImg1],
        about: "Te Leport is old port in south.",
        routes: ["Northmadic", "Shire"]
    },
    {
        id: "t02",
        name: "Yummy Desert",
        img: [yummyImg1],
        about: "Sooo yummy",
        routes: ["Magical Forest", "Grandpa's Mountains", "Northmadic"]
    },
    {
        id: "t03",
        name: "Northmadic",
        img: [northmadicImg1],
        about: "Welcome on the North.",
        routes: ["Shire", "Te Leport", "Yummy Desert"]
    },
    {
        id: "t04",
        name: "Shire",
        img: [shireImg1],
        about: "Deer and foxes are citizens here.",
        routes: ["Northmadic", "Te Leport", "Macho Pichu"]
    },
    {
        id: "t05",
        name: "Macho Pichu",
        img: [machupichuImg1],
        about: "At a long time, macho and pichu connected people in this place.",
        routes: ["Shire", "Ice Scream"]
    },
    {
        id: "t06",
        name: "Ice Scream",
        img: [icesreamImg1],
        about: "",
        routes: ["Macho Pichu", "Lovely"]
    },
    {
        id: "07",
        name: "Lovely",
        img: [lovelyImg1],
        about: "",
        routes: ["Ice Scream"]
    }
    ,{
        id: "",
        name: "",
        img: [],
        about: "",
        routes: ""
    },{
        id: "",
        name: "",
        img: [],
        about: "",
        routes: ""
    },{
        id: "",
        name: "",
        img: [],
        about: "",
        routes: ""
    }
]