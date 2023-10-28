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

    const actions = {
        0: () => {},
        1: () => {
            ;
            ;
        },
        2: () => {
            ;
        }
    };

    const [page, incrementPage, decrementPage] = useStatePage(-1, actions);

    return (
        <div className="container__profile">
            <img className="profile-img" src={charImg} alt="" />
            <UserInfoBox
                name={currentUser.username}
                location={currentUser.location}
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
