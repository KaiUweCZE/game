import React from "react";

// url(${Bg})
const Wallpaper = ({background, children}) => {

    return(
        <div className="crossroad-wrapper">
            <div className="background-main" style={{backgroundImage: `url(${background})`}} >
                {children}
            </div>
        </div>
    )
}

export default Wallpaper