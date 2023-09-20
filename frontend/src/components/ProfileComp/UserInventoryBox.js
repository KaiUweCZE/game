import React from "react";
import { BoxInventory } from "../light-component/LightComponent";


const UserInventoryBox = ({myClass, i, children}) => {

    return(
        <div className={`box__user-inventory ${myClass} ${i === 1 ? "fast-opacity" : ""}`} >
        <span>Bag</span>
        <hr />
        <BoxInventory 
        />
        {children}
    </div>
    )
}

export default UserInventoryBox