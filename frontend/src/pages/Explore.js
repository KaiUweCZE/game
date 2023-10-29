import React, { useEffect, useState } from "react";
import Wallpaper from "../components/Wallpaper";
import BoxAction from "../components/BoxAction";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../data/DataCountries/countryData";
import { setYourLocation } from "../Functions/hooks/useLocation";
import { startTraveling, endTraveling } from "../redux/user/userSlice";
import OnRoad from "../components/OnRoad";

// Main interactive place with your location(some action or go somewhere else)
const Explore = () => {
    const [travelTime, setTravelTime] = useState(0)
    const {currentUser, traveling, travelEndTime} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    
    // find the current country based on user location
    const country = countries.find(e => e.name === currentUser.location)
    

    // Fetch the routes and its actions
    const routes = country.routes.map(e => {
        return {
            name: e,
            to: '/onroad',
            action: async () => {
                const addTime = 15000;
                const travelEndTime = new Date().getTime() + addTime; // add 10s to actual time
                setTravelTime(addTime)
                dispatch(startTraveling(travelEndTime)); // traveling start!
                setYourLocation(currentUser.username, e, dispatch); // set location
            },
        };
    });

    useEffect(() => {
        if (traveling) {
          const currentTime = new Date().getTime();
          const remainingTime = travelEndTime - currentTime;
    
          const timer = setTimeout(() => {
            dispatch(endTraveling());
          }, remainingTime);
    
          return () => clearTimeout(timer);
        }
      }, [traveling, travelEndTime, dispatch]);
    

    return(
        <>
        {
            traveling ? <OnRoad travelTime={travelTime} /> :
        <Wallpaper background={country.img[0]}>
            <BoxAction 
                title={country.name}
                links={routes}
                extra={country?.actions}
            />
            
        </Wallpaper>
        }
        </>
    )
}


export default Explore
