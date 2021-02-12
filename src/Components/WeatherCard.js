
import React from "react";
import compassPoint from "../compassPoint";


function WeatherCard(props) {
  
  let compassDirection = compassPoint(props.windDirection);
  return (
    <div className="border w-64 mb-4 rounded overflow-hidden ">
      <h4 className="text-2xl font-bold">{props.name}, {props.country}</h4>
      <p>{props.description}</p>
      <p>{props.temp}<sup>o</sup>C</p>
      <p>{props.temp_min}<sup>o</sup>C to {props.temp_max}<sup>o</sup>C</p>
      <p>{props.humidity}%</p>
      <p>Cloudiness - {props.cloudiness}%</p>
      <h6 className="text-lg font-semibold">Wind:</h6>  
      <p>Speed - {props.windSpeed} meter/sec</p>
      <p>Direction - {props.windDirection}<sup>o</sup> ({compassDirection}) </p>
    </div>
  )
};



export default WeatherCard;