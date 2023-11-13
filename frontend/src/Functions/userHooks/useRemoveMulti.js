import React, { useState, useEffect } from "react";

const removeMulti = (array) => {
    const uniqueElements = [...new Set(array)]
    return uniqueElements
};

export const useRemoveMulti = (array) => {
    const [newArray, setNewArray] = useState([])

    useEffect(() => { 
        const elements = removeMulti(array);
        console.log(elements);
        setNewArray(elements);
    }, [])


    return newArray
}