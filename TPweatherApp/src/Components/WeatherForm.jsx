import { useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function WeatherForm({onChangeCity}){
    const [city,setCity]=useState('london')

    function handleChange(even){
        const value=even.target.value;

        // if(value!==''){
        // }
        setCity(value)
        


    }

    function handleSubmit(e){
        e.preventDefault();
        if(city!==''){
            onChangeCity(city)
            setCity('')
        }
        else{
            alert('Veuiller choisir une ville!');
        }

    }


    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={city}/>
            <button type="submit" onClick={handleSubmit}>Rechercher</button>
        </form>
    )
}