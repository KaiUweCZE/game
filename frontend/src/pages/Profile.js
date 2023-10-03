import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { char1, char3, arrow } from "../data/importedImages";
import { Arrow } from "../components/light-component/LightComponent";
import UserInfoBox from "../components/ProfileComp/UserInfoBox";
import UserInventoryBox from "../components/ProfileComp/UserInventoryBox";
import UserPokemonsBox from "../components/ProfileComp/UserPokemonsBox";
import { useStatePage, useUserData } from "../Functions/myHooks";

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null);
    const charImg = currentUser.img === "char1" ? char1 : char3;
    const userData = useUserData(currentUser.username);

    const actions = {
        0: () => arrowRef.current.style.transform = "rotate(180deg)",
        1: () => {
            arrowRef.current.style.transform = "rotate(0deg)";
            arrowRef2.current.style.transform = "rotate(-90deg)";
        },
        2: () => {
            arrowRef2.current.style.transform = "rotate(-270deg)";
        }
    };

    const [page, incrementPage, decrementPage] = useStatePage(-1, actions);

    return (
        <div className="container__profile">
            <img className="profile-img" src={charImg} alt="" />
            <h2>moje: {currentUser.mySix}</h2>
            <UserInfoBox
                name={currentUser.username}
                location="Home"
                abilities="none"
                statistics="lorem, ipsum dolor."
            >
                <Arrow ref={arrowRef} src={arrow} fun={page <= -1 ? incrementPage : decrementPage} />
            </UserInfoBox>

            <UserInventoryBox myClass={page >= 0 ? "active" : ""} i={page}>
                <Arrow ref={arrowRef2} src={arrow} fun={page <= 0 ? incrementPage : decrementPage} />
            </UserInventoryBox>
            <UserPokemonsBox myClass={page >= 1 ? "active" : ""} i={page} />
        </div>
    );
};

export default Profile;
