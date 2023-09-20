import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import UserApi from '../services/api'
import { char1, char3, arrow} from "../data/importedImages";
import  { Arrow } from "../components/light-component/LightComponent";
import UserInfoBox from "../components/ProfileComp/UserInfoBox";
import UserInventoryBox from "../components/ProfileComp/UserInventoryBox";
import UserPokemonsBox from "../components/ProfileComp/UserPokemonsBox";


const Profile = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [myClass, setMyClass] = useState("");
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null)
    const [i, setI] = useState(0)
    const charImg = currentUser.img === "char1" ? char1 : char3


    // fetch user Img (string in databes, img is import in .js file)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = (await UserApi.aboutUser({ username: currentUser.username })).data;
                return userData
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        console.log(currentUser.img);
        console.log(charImg);
        fetchData();
    }, []);


    //apply transform effects 
    const showComponent = () =>{
        if (myClass === "" && i === 0) {
            arrowRef.current.style.transform = "rotate(180deg)";
            setMyClass("active")
            setI(1)
        } else if (i === 1){
            arrowRef.current.style.transform = "rotate(0deg)"
            arrowRef2.current.style.transform = "rotate(-90deg)";
            setMyClass("")
            setI(0);
        } else {
            setI(1)
        }     
    }

    //second arrow func
    const setter = () => {
        if (i === 1) {
            arrowRef2.current.style.transform = "rotate(-270deg)";
            setI(2)
        } else {
            arrowRef2.current.style.transform = "rotate(-90deg)";
            setI(1)
        }
    }

    
    return(
        <div className="container__profile">
            
            <img className="profile-img" src={charImg} alt="" />
            {/* this will be componenta */}
            <UserInfoBox
            name={currentUser.username}
            location= "Home"
            abilities= "none"
            statistics="lorem, ipsum dolor."
            >
            <Arrow ref={arrowRef} src={arrow} fun={showComponent} />
            </UserInfoBox>
            
            <UserInventoryBox myClass={myClass} i={i}>
                <Arrow ref={arrowRef2} src={arrow} fun={setter} />
            </UserInventoryBox>

            <UserPokemonsBox myClass={myClass} i={i} />

        </div>
    )
}


export default Profile