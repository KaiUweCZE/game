import React from "react";
import Wallpaper from "../components/Wallpaper";
import BoxAction from "../components/BoxAction";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../data/DataCountries/countryData";
import { setYourLocation } from "../Functions/hooks/useLocation";

// Main interactive place with your location(some action or go somewhere else)
const Explore = () => {
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const country = countries.find(e => e.name === currentUser.location)
    
    const routes = country.routes.map(e => {
        return{
            name: e,
            to: '/onroad',
            action: () => setYourLocation(currentUser.username, e, dispatch),
        };
    });

    

    return(
        <>
        <Wallpaper background={country.img[0]}>
            <BoxAction 
                title={country.name}
                links={routes}
                extra={country?.actions}
            />
            
        </Wallpaper>
        </>
    )
}


export default Explore
