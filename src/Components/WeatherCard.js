import React from "react";
import compassPoint from "../compassPoint";

function WeatherCard({ place, onChecked }) {
  return (
    <div
      className="inline-block px-4 w-64 h-64 text-center"
      key={place.name + place.country}
      onClick={() => onChecked(place.name + place.country)}
    >
      <div className="bg-blue-500 rounded-lg overflow-hidden shadow-xl my-8 py-4 px-4 focus: bg-gradient-to-r from-green-400 to-blue-500 ">
        <img
          src={`https://openweathermap.org/img/wn/${place.icon}@2x.png`}
          alt={place.description + " icon"}
          className="w-32 h-32"
        />
        <h4 className="text-2xl font-bold">
          {place.name}, {place.country}
        </h4>
        <p>{place.description}</p>
        <p>
          {place.temp}
          <sup>o</sup>C
        </p>
        <p>
          {place.temp_min}
          <sup>o</sup>C to {place.temp_max}
          <sup>o</sup>C
        </p>
        <p>Humidity: {place.humidity}%</p>
        <p>Cloudiness: {place.cloudiness}%</p>
        <h6 className="text-lg font-semibold">Wind</h6>
        <p>Speed: {place.windSpeed} meter/sec</p>
        <p>
          Direction: {place.windDirection}
          <sup>o</sup> ({compassPoint(place.windDirection)})
        </p>
        <p className="text-xs text-right pt-2 italic ">
          last updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
