import React, {useEffect, useState} from "react";
import ButtonProfile from "./light-component/ButtonProfile";


const BoxTalks = (props) => {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [dummyText] = useState(props.content)
    const [clickable, setClickable] = useState(true)
    let timer;

    const handleGenerateText = () => {
        let i = -1;
        let words = dummyText.split(' ');
        let remainingLength = words.length - index;
        let wordsToAdd = Math.min(9, remainingLength -1 );
        let slicedWords = words.slice(index, index + wordsToAdd + 1);
        let joinedWords = slicedWords.join(' ');
        let totalLength = joinedWords.length;
        index === 0 ? "" : setText(prev => prev + ' ')
        timer = setInterval(() => {
            i++;
            setClickable(false)
            if (i >= totalLength - 1)
            {
                clearInterval(timer);
                setClickable(true);
            }
            if( index === -1 ){
                setText(dummyText)
            } else if ( index + 10 < words.length){
                setText((prev) => prev + joinedWords[i]);
                setIndex(index + 10)
                setLetterIndex(letterIndex + totalLength)   
            } else if( index + 10 >= words.length){
                setText((prev) => prev + joinedWords[i]);
                setIndex(-1)
                setClickable(false);
            }
        }, 30);
    };

    useEffect(() => {

    }, setClickable)

    return(
        <div className="box__talks">
            <article>
                <h2>{props.talker}</h2>
                <hr />
                <p>
                    {text ? text : "Let's talk!"}
                </p>
            </article>

            { clickable ? <ButtonProfile
            content = {props.answer}
            func = {handleGenerateText}
            path = ""
            /> : <ButtonProfile content="..."/>}
            
        </div>
    )
}

export default BoxTalks