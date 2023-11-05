import mainCharacter01 from '../../styles/images/boy_char1.webp'
import mainCharacter02 from '../../styles/images/boy_char3.webp'
import profBloom from '../../styles/images/characters/profbloom.webp'
import hank1 from '../../styles/images/reedit/Hank/hank1.webp'
import samuel1 from '../../styles/images/reedit/Samuel/sam1.webp'
import joel1 from '../../styles/images/reedit/Joel/joel1.webp'
import raphael1 from '../../styles/images/reedit/stadion trainers/Raphael/raphael1.webp'
import fattucino1 from '../../styles/images/reedit/Fattuccino/fattucino1.webp'
import jude1 from '../../styles/images/reedit/stadion trainers/JudeHigh/jude1.webp'
import bob1 from '../../styles/images/reedit/bob/bob1.webp'
import rust1 from '../../styles/images/reedit/stadion trainers/08/rust1.webp'

export {mainCharacter01, mainCharacter02, profBloom, hank1, samuel1, joel1}

export const npcCharacters = [
    {
        id: 0,
        name: "prof. Bloom",
        images: [profBloom],
        action: [
            {
                name: "fight",
                talks: "Není třeba bojovat, mladý trenére. Místo toho se mějme k sobě s respektem."
            },
            {
                name: "about",
                talks: "Studuji pokémony celý svůj život a s věkem přichází i moudrost."
            }
        ]
    },
    {
        id: 1,
        name: "Hank",
        images: [hank1],
        action: [
            {
                name: "fight",
                talks: "Hele, jestli chceš bojovat, jsem připraven! Ale upozorňuju, mám spoustu energie!"
            },
            {
                name: "about",
                talks: "Jsem Hank, 12letý kluk, který miluje pokémony a dobrodružství!"
            }
        ]
    },
    {
        id: 2,
        name: "Samuel",
        images: [samuel1],
        action: [
            {
                name: "fight",
                talks: "Jasná páka, proč se trochu neprotáhnout"
            },
            {
                name: "about",
                talks: "Jó, kamaráde... Kde začít... Nějakej ten rok trénování už mám za sebou a za tu dobu jsem, řekl bych, našel svůj směr a styl."
            }
        ]
    },
    {
        id: 3,
        name: "Joel",
        images: [joel1],
        action: [
            {
                name: "fight",
                talks: "Hm..."
            },
            {
                name: "about",
                talks: "Co se staráš?"
            }
        ]
    },
    {
        id: 4,
        name: "Raphael",
        images: [raphael1],
        action: [
            {
                name: "fight",
                talks: "Už davní řekové věděli, že výhra patří želvám!"
            },
            {
                name: "about",
                talks: "No, co říct o sobě? Věděl si, že želvy existují už přes 200 milionů let? Jejich předkové žili ve stejnou dobu jako dinosauři. A to není vše, želvy jsou jedním z mála druhů, které mají jak endoskelet, tak exoskelet. Jejich krunýř je opravdu unikátní; horní část se nazývá karapax a spodní plastron. Tyto dvě části jsou spojeny dvěma řadami kostí, což dává želvám jejich charakteristický vzhled. A věděl jsi, že některé želvy mohou žít až 100 let a více? Oh, a nemluvě o mořských želvách, jejich migrační cesty jsou tak komplexní, že stále nejsou plně pochopeny. Například, některá želva cestuje tisíce kilometrů přes oceán, aby se vrátila na stejnou pláž, kde se narodila, a položila svá vlastní vejce. Je to fascinující, nemyslíš?"
            }
        ]
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
        action: [
            {
                name: "fight",
                talks: "All I am saying is to give peace a chance. Hey bro, dej si veget, bojů už bylo dost, proč jednou nezměřit své síly v míru."
            },
            {
                name: "about",
                talks: "Více bych se ti rozvyprávěl o sobě tenkrát, když jsem se neznal, co ale nyní... když už se znám"
            }
        ]
    },
    {
        id: 8,
        name: "Rust",
        images: [rust1]
    },
    {
        id: 15,
        name: "Barbagoose",
        images: [],
    }
]