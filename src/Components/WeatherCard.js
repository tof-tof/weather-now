
import React from "react";
import compassPoint from "../compassPoint";


function WeatherCard({ place }) {
  return (
    <div className="inline-block px-4 w-64 h-64"> 
            <div className="bg-blue-500 rounded-lg overflow-hidden shadow-xl my-8 py-4 px-4" key={place.name+place.country}>
              <h4 className="text-2xl font-bold">{place.name}, {place.country}</h4>
              <p>{place.description}</p>
              <p>{place.temp}<sup>o</sup>C</p>
              <p>{place.temp_min}<sup>o</sup>C to {place.temp_max}<sup>o</sup>C</p>
              <p>{place.humidity}%</p>
              <p>Cloudiness - {place.cloudiness}%</p>
              <h6 className="text-lg font-semibold">Wind:</h6>  
              <p>Speed - {place.windSpeed} meter/sec</p>
              <p>Direction - {place.windDirection}<sup>o</sup> ({compassPoint(place.windDirection) })</p>
            </div>
          </div>
  )
};



export default WeatherCard;