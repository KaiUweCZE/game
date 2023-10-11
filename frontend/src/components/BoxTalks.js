import React, {useEffect, useState} from "react";
import ButtonProfile from "./light-component/ButtonProfile";


const BoxTalks = (props) => {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [dummyText] = useState(props.content)
    const [clickable, setClickable] = useState(true)
    

    const handleGenerateText = () => {
        let i = -1;
        let timer;
        // get array of dummyText's words
        let words = dummyText.split(' ');
        // check how many words remain
        let remainingLength = words.length - index;
        // each click adds 10 words or less if fewer words remain
        let wordsToAdd = Math.min(9, remainingLength -1 );
        // get an array of words for a next iteration
        let slicedWords = words.slice(index, index + wordsToAdd + 1);
        // connect the array of words to one string
        let joinedWords = slicedWords.join(' ');
        // next number of iterations = number of letters in the string
        let totalLength = joinedWords.length;
        // add whitespace after each strings
        index === 0 ? "" : setText(prev => prev + ' ')
        timer = setInterval(() => {
            i++;
            // disable button
            setClickable(false)
            if (i >= totalLength - 1)
            {
                // cyklus done, button clickable
                clearInterval(timer);
                setClickable(true);
            }
            if( index === -1 ){
                setText(dummyText)
            } else if ( index + 10 < words.length){
                // generate 10 words by letters
                setText((prev) => prev + joinedWords[i]);
                setIndex(index + 10)
                 
            } else if( index + 10 >= words.length){
                // get the whole text, so stop typewrite func
                setText((prev) => prev + joinedWords[i]);
                setIndex(-1)
                setClickable(false);
            }
        }, 30);
    };

    return(
        <>
        <div className="box__talks">
            <article>
                <h2>{props.talker}</h2>
                <p>
                    {text ? text : "Let's talk!"}
                </p>
            </article>
        </div>
        <ul className="menu__options">
        <li>{ clickable ? <ButtonProfile
            content = {props.answer}
            func = {handleGenerateText}
            path = ""
            /> : <ButtonProfile content="..."/>}</li>
            { /*props.answer.map(answer, index => {

                return(
                    <li><ButtonProfile /></li>
                )
            })
            <li>{ clickable ? <ButtonProfile
            content = {props.answer}
            func = {handleGenerateText}
            path = ""
            /> : <ButtonProfile content="..."/>}</li>
            */}
        </ul>
        
        </>
    )
}

export default BoxTalks