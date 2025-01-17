import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import React,{useState} from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelslike:24.84,
        temp:25.9,
        tempMin:23.3,
        tempMax:23.3,
        humidity:34,
        weather:"haze",
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}