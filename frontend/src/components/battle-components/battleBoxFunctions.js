

export const handlerAttack = (attack) =>{
    return attack
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

/* who knows if I need to use it */
export const reloadAttack = (attack) => {
    return attack.reload;
}

export const useStartBattle = (boolean) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {

        }, 1000)   
    }, [])
    
    return dmg
}