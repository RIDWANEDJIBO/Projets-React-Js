import {useEffect, useState} from "react";
import Loader from './Loader';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const weatherApi='https://api.weatherapi.com/v1/current.json?aqi=no';
const weatherKey='3deb83e9baad4315877214619242009';



export  default function WeatherApp(){

    const [weather, setWeather]=useState(null);

    useEffect(()=>{
        Loadinfo();
    },[]);

    // useEffect(()=>{

    // }[])


    async function Loadinfo(city="london"){
        try{
            const request = await fetch(`${weatherApi}&key=${weatherKey}&q=${city}`);

            const json = await request.json();
            setTimeout(()=>{
                setWeather(json);

            },2000)

            console.log(json);

            
             
        }
        catch(error){
            console.error(`Erreur lors de la recuperation des données: ${error}`)
        }
        
    }

    function handleChange(city){
        setWeather(null);
        Loadinfo(city);
    }




    return(
        <div className="container">
            <WeatherForm onChangeCity={handleChange}/>
            {weather?<WeatherInfo weather={weather}/>:<Loader/>}
        </div>
    )
}