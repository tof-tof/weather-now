import React from "react";


function WeatherCard(props) {
  return (
  <div className="border w-64 mb-4 rounded overflow-hidden ">
    <p>{props.name}</p>
      <p>{props.country}</p>
      <p>{props.description}</p>
      <p>{props.temp}</p>
      <p>{props.temp_min} to {props.temp_max}</p>
      <p>{props.humdity}%</p>
      <p>{props.cloudiness}</p>
      <p>{props.windSpeed}</p>
      <p>{props.windDirection}</p>
      
    </div>
  )
};

export default WeatherCard;