import mainCharacter01 from '../../styles/images/boy_char1.webp'
import mainCharacter02 from '../../styles/images/boy_char3.webp'
import profBloom1 from '../../styles/images/reedit/prof Bloom/profbloom1.webp'
import profBloom2 from '../../styles/images/reedit/prof Bloom/profbloom2.webp'
import hank1 from '../../styles/images/reedit/Hank/hank1.webp'
import samuel1 from '../../styles/images/reedit/Samuel/sam1.webp'
import joel1 from '../../styles/images/reedit/Joel/joel1.webp'
import barbagoose1 from '../../styles/images/reedit/stadion trainers/pirateBarbagoose/barbagoose1.webp'
import raphael1 from '../../styles/images/reedit/stadion trainers/Raphael/raphael1.webp'
import fattucino1 from '../../styles/images/reedit/Fattuccino/fattucino1.webp'
import jude1 from '../../styles/images/reedit/stadion trainers/JudeHigh/jude1.webp'
import bob1 from '../../styles/images/reedit/bob/bob1.webp'

export {mainCharacter01, mainCharacter02, profBloom1, profBloom2, hank1, samuel1, joel1}

export const npcCharacters = [
    {
        id: 0,
        name: "prof. Bloom",
        images: [profBloom1, profBloom2]
    },
    {
        id: 1,
        name: "Hank",
        images: [hank1]
    },
    {
        id: 2,
        name: "Samuel",
        images: [samuel1]
    },
    {
        id: 3,
        name: "Joel",
        images: [joel1]
    },
    {
        id: 4,
        name: "Raphael",
        images: [raphael1]
    },
    {
        id: 5,
        name: "Fattuciono",
        images: [fattucino1]
    },
    {
        id: 6,
        name: "High Jude",
        images: [jude1]
    },
    {
        id: 7,
        name: "Bob",
        images: [bob1],
        action: {
            fight: {
                name: "fight",
                talks: "Hey bro, dej si veget, bojů už bylo dost, proč se pro jednou nepoměřit v míru."
            },
            about: {
                name: "about",
                talks: "Hoo, tak vysoko a tak moc podemnou je minulost, ptáš se a odpověď znáš, nelezni k ní cestu, protože na ní jsou všechny odpovědi"
            }
        }
    },
    {
        id: 15,
        name: "Barbagoose",
        images: [barbagoose1],
    }
]