import React, { useState } from 'react'
import  './weather.css'

import clear_icon from "../assests/clear.png";
import cloud_icon from "../assests/cloud.png";
import drizzle_icon from "../assests/drizzle.png";
import humidity_icon from "../assests/humidity.png";
import rain_icon from "../assests/rain.png";

import wind_icon from "../assests/wind.png";
import snow_icon from "../assests/snow.png";



const Weather = () => {

  let api_key = "0f48e72c3b4d92a06b1d69d27e0870f8";

  const [wicon, setWicon] = useState(cloud_icon);
  
  const search =async () => {
     
    const element = document.getElementsByClassName("search-bar");
    const inputValue = element[0].value.trim();

    if(inputValue===" "){
      return 0;
      
    }else if(!isNaN){
      return 0;

    }else{

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response =await fetch(url);
    let data =await  response.json();

    const humidity = document.getElementsByClassName("humidity-rate");
    const wind = document.getElementsByClassName("wind-rate");
    const temparature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML=data.main.humidity+ " %";
    wind[0].innerHTML=data.wind.speed+ " km/h";
    temparature[0].innerHTML=data.main.temp+ " °C";
    location[0].innerHTML=data.name;


    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear_icon);
    }else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud_icon);
    }else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle_icon);
    }else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(cloud_icon);
    }else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain_icon);
    }else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain_icon);
    }else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow_icon);
    }else{
      setWicon(clear_icon);
    }
      
    }

    

  }

  return (
    <div className="container">
      <div className="heder">
      
        <div className="inputs">
          <input type="text"  placeholder='Search a City' className="search-bar"/>
          <input type="submit" value="Go" className="button" onClick={()=>{search()}}/>
        </div>

        <div className="weather-image">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Colombo</div>

        <div className="data-container">

          <div className="element">
            <img src={humidity_icon} alt="" className='humidity-img'/>
            <div className="data">
              <div className="humidity-rate">70%</div>
              <div className="text">humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} alt="" className='wind-img'/>
            <div className="data">
              <div className="wind-rate">70km/h</div>
              <div className="text">wind speed</div>
            </div>
          </div>

        </div>


      </div>
    </div>
    
  



  )
}

export default Weather  
