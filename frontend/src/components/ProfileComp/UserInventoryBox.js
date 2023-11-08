import React from "react";
import { BoxInventory } from "./ProfileSubComponent";


const UserInventoryBox = ({myClass, i, children, user}) => {


    return(
        <div className={`box__user-inventory ${myClass} ${i === 0 ? "fast-opacity" : ""}`} >
        <span>Bag</span>
        <hr />
        <BoxInventory 
        username={user}
        />
        {children}
    </div>
    )
}

export default UserInventoryBox