import yummyImg1 from '../../styles/images/countries/yummy1.webp'
import northmadicImg1 from '../../styles/images/countries/northmandic1.webp'
import shireImg1 from '../../styles/images/countries/shire1.webp'
import tinyCaveImg1 from '../../styles/images/countries/cave2.webp'
import barnImg1 from '../../styles/images/countries/barn.webp'
import magicalForImg1 from '../../styles/images/countries/magical-forest1.webp'
import grandpaMoImg1 from '../../styles/images/countries/gmountain2.webp'
import teleportImg1 from '../../styles/images/countries/teleport1.webp'
import machupichuImg1 from '../../styles/images/countries/machopichu1.webp'
import icesreamImg1 from '../../styles/images/countries/iceScream1.webp'
import lovelyImg1 from '../../styles/images/countries/lovely1.webp'
import jungleImg1 from '../../styles/images/countries/jungle1.webp'
import redwoodsImg1 from '../../styles/images/countries/redwoods1.webp'
import futuromeImg1 from '../../styles/images/countries/futurome1.webp'
import chatotImg1 from '../../styles/images/countries/chatotcastle1.webp'
import waterfallsImg1 from '../../styles/images/countries/waterfalls1.webp'
import gastlyTowerImg1 from '../../styles/images/countries/gastlytower1.webp'
import monastryImg1 from '../../styles/images/countries/monastry1.webp'
import mineImg1 from '../../styles/images/countries/deepmine1.webp'
import lakeImg1 from '../../styles/images/countries/lake1.webp'

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
        routes: ["Yummy Desert", "Te Leport", "Northmadic"],
        actions: ["fight"],
        enemies: []   
    },
    {
        id: "c02",
        name:"Tiny Cave",
        img: [tinyCaveImg1],
        about: "Lorem",
        routes: ["noname3", "Shire", "Lovely", "Macho Pichu"],
        actions: ["fight"],
        enemies: []
    },
    {
        id: "c03",
        name:"Grandpa's Mountains",
        img: [grandpaMoImg1],
        about: "Lorem",
        routes: ["noname4", "Mine", "Monastry"],
        actions: ["fight"],
        enemies: []
    },
    {
        id: "c04",
        name:"Willy's Barn",
        img: [barnImg1],
        about: "Lorem",
        routes: ["Futu Rome", "Shire", "noname3"],
        enemies: []
    },
    {
        id: "c05",
        name: "Jungle",
        img: [jungleImg1],
        about: "lorem",
        routes: ["Last City", "Macho Pichu", "Gastly Tower"],
        enemies: [],
        actions: [],
    },
    {
        id: "c06",
        name: "Redwoods",
        img: [redwoodsImg1],
        about: "lorem",
        routes: ["Lovely", "Macho Pichu", "Ice Scream", "Last City"],
        enemies: [],
        actions: [],
    },
    {
        id: "c07",
        name: "Waterfalls",
        img: [waterfallsImg1],
        about: "lorem",
        routes: ["noname3", "Macho Pichu", "Gastly Tower"],
        enemies: [],
        actions: [],
    },
    {
        id: "c08",
        name: "Mine",
        img: [mineImg1],
        about: "lorem",
        routes: ["Te Leport", "Grandpa's Mountains", "Yummy Desert"],
        enemies: [],
        actions: [],
    },
    {
        id: "c09",
        name: "Gastly Tower",
        img: [gastlyTowerImg1],
        about: "lorem",
        routes: ["Jungle", "Waterfalls"],
        enemies: [],
        actions: [],
    },
    {
        id: "c10",
        name: "Monastry",
        img: [monastryImg1],
        about: "lorem",
        routes: ["Grandpa's Mountains", "Chatot Castle", "Ice Scream"],
        enemies: [],
        actions: [],
    },
    {
        id: "c11",
        name: "Lake",
        img: [lakeImg1],
        about: "lorem",
        routes: ["Northmadic", "Shire", "Yummy Desert", "Lovely"],
        enemies: [],
        actions: [],
    },
    {
        id: "c12",
        name: "noname1",
        img: [],
        about: "lorem",
        routes: ["Chatot Castle", "Ice Scream", "Last City"],
        enemies: [],
        actions: [],
    },
    {
        id: "c13",
        name: "noname2",
        img: [],
        about: "lorem",
        routes: ["Northmadic", "Futu Rome", "Shire"],
        enemies: [],
        actions: [],
    },
    {
        id: "c14",
        name: "noname3",
        img: [],
        about: "lorem",
        routes: ["Willy's Barn","Tiny Cave","Waterfalls"],
        enemies: [],
        actions: [],
    },
    {
        id: "c15",
        name: "noname4",
        img: [],
        about: "lorem",
        routes: ["Grandpa's Mountains", "Yummy Desert", "Lovely", "Ice Scream"],
        enemies: [],
        actions: [],
    },
    {
        id: "t01",
        name: "Te Leport",
        img: [teleportImg1],
        about: "Te Leport is old port in south.",
        routes: ["Magical Forest", "Mine"]
    },
    {
        id: "t02",
        name: "Yummy Desert",
        img: [yummyImg1],
        about: "Sooo yummy",
        routes: ["Lake", "Magical Forest", "Mine", "noname4"]
    },
    {
        id: "t03",
        name: "Northmadic",
        img: [northmadicImg1],
        about: "Welcome on the North.",
        routes: ["Magical Forest", "Lake", "noname2"]
    },
    {
        id: "t04",
        name: "Shire",
        img: [shireImg1],
        about: "Deer and foxes are citizens here.",
        routes: ["noname2", "Lake", "Tiny Cave", "Willy's Barn"]
    },
    {
        id: "t05",
        name: "Macho Pichu",
        img: [machupichuImg1],
        about: "At a long time, macho and pichu connected people in this place.",
        routes: ["Redwoods", "Jungle", "Tiny Cave", "Waterfalls"]
    },
    {
        id: "t06",
        name: "Ice Scream",
        img: [icesreamImg1],
        about: "",
        routes: ["Redwoods", "noname4", "Monastry", "noname1"]
    },
    {
        id: "t07",
        name: "Lovely",
        img: [lovelyImg1],
        about: "",
        routes: ["noname4", "Redwoods", "Lake", "Tiny Cave"]
    }
    ,{
        id: "t08",
        name: "Futu Rome",
        img: [futuromeImg1],
        about: "",
        routes: ["Willy's Barn", "noname2"]
    },{
        id: "t09",
        name: "Chatot Castle",
        img: [chatotImg1],
        about: "",
        routes: ["noname1", "Monastry"]
    },{
        id: "t10",
        name: "Last City",
        img: [],
        about: "",
        routes: ["noname1", "Redwoods", "Jungle"]
    }
]