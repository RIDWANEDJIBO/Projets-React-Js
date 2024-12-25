import { useState } from "react"


export default function EmojiSearch({onSearch}){

    const [value, setValue]=useState('');

    function handleChange(e){
        // e.preventDefault();
        setValue(e.target.value); 
        onSearch(e)
    }

    return(
        <input type="text" placeholder="Quel emoji recherchez-vous ?" onChange={handleChange} value={value}/>
    )
}