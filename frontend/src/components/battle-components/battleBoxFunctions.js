import HpComponent from "./HpComponent";

export const handlerAttack = (attack) =>{
    return attack.dmg
    //calculateHp(attack.dmg)
}
export const handlerAvoid = () =>{
    console.log("void!");
}
export const handlerSwitch = () =>{
    console.log("switch!");
}

export const calculateHp = (attack) => {
    console.log("attack is: ", attack);
}