import React from "react";
//import { useRemoveMulti } from "../../Functions/userHooks/useRemoveMulti";


//this component returns box with user's contacts (used in Mail page)
const MailMenu = (props) => {

    // remove multiplication from array
    const npcList = props.npc.map(npc => npc.name); // Extrahuje jména NPC
    const uniqueArray= [...new Set(npcList)];
    
    
    // customHook option ?
    //const myList = useRemoveMulti(props.npc.map(npc => npc.name));
    //console.log("my list: ", myList);

    return(
        <div className="box__mail">
            <h2>Contacts</h2>
            <ul className="menu__mail">
                {
                    uniqueArray.map((name, index) => {

                        return(
                            <li key={index} onClick={() => props.func(name)}>{name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default MailMenu