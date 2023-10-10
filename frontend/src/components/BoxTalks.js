import React, {useEffect, useState} from "react";
import ButtonProfile from "./light-component/ButtonProfile";


const BoxTalks = (props) => {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [dummyText] = useState(props.content)
    let timer;

    const handleGenerateText = () => {
        let i = -1;
        timer = setInterval(() => {
            i++;
            let remainingLength = dummyText.length - index;
            let charactersToAdd = Math.min(49, remainingLength -1 );
            if (i >= charactersToAdd) clearInterval(timer);
            if( index === -1 ){
                setText(dummyText)
            } else if ( index + 50 < dummyText.length){
                setText((prev) => prev + dummyText[index + i]);
                setIndex(index + 50)          
            } else if( index + 50 >= dummyText.length){
                setText((prev) => prev + dummyText[index + i]);
                setIndex(-1)
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