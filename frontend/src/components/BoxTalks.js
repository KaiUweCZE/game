import React, {useEffect, useState} from "react";
import ButtonProfile from "./light-component/ButtonProfile";


const BoxTalks = (props) => {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [dummyText] = useState(props.content)
    let timer;

    const handleGenerateText = () => {
        let i = -1
        //let localIndex = index
        timer = setInterval(() => {
            i++;
            if (i === 30) clearInterval(timer);
            if ( index <= dummyText.length){
                setText((prev) => prev + dummyText[index + i]);
                setIndex(index+30 >= dummyText.length ? dummyText.length + 1 : index + 30)      
                console.log(index, dummyText.length, index % 100);           
            } else{
                setText(dummyText)
            }           
        }, 10);
    };

    const handleResetText = () => {
    }
    return(
        <div className="box__talks">
            <article>
                <h2>{props.talker}</h2>
                <hr />
                <p>
                    {text ? text : "Let's talk!"}
                </p>
            </article>

            <ButtonProfile
            content = ">>"
            func = {handleGenerateText}
            path = ""
            />
            
        </div>
    )
}

export default BoxTalks