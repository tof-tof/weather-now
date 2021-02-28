import React from "react";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
import BeatLoader from "react-spinners/BeatLoader";
import Information from "./Information";

export default function Search() {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState(null);
  const searchCity = async (e) => {
    e.preventDefault();
    setSearching(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a704e11e672d58e61bc84715b062d59&units=Metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        if (!cityList.includes(data.name + data.sys.country)) {
          setMessage(null);
          setContent([
            ...content,
            {
              name: data.name,
              country: data.sys.country,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              temp: data.main.temp,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              humidity: data.main.humidity,
              cloudiness: data.clouds.all,
              windSpeed: data.wind.speed,
              windDirection: data.wind.deg,
            },
          ]);
          setCityList([...cityList, data.name + data.sys.country]);
        }
      } else {
        setMessage(`error code: ${data.cod} \n ${data.message}`);
      }
      setSearching(false);
    } catch (err) {
      setMessage("An unexpected error occured");
      setSearching(false);
    }
  };
  const deleteCity = (id) => {
    setContent((prevItems) => {
      return prevItems.filter((data) => {
        return data.name + data.country !== id;
      });
    });
    setCityList((prevList) => {
      return prevList.filter((city) => {
        return city !== id;
      });
    });
  };
  return (
    <div className="container mx-auto pt-6">
      <div className="flex justify-center max-w-screen-sm mx-auto px-5">
        <form
          className="w-full h-10 pl-5 pr-2 bg-white border rounded-full flex justify-between items-center relative focus:ring-1"
          onSubmit={searchCity}
        >
          <input
            type="text"
            name="city"
            placeholder="search for anywhere"
            className="appearance-non w-full outline-none focus:outline-none active:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="ml-1 outline-none focus:outline-none active:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
        <span className="pl-2 hidden lg:block">
          <Information />
        </span>
      </div>
      <span className="m-0 p-0 flex justify-center lg:hidden">
          <Information />
      </span>
      <div className="container mx-auto justify-center items-center">
        {searching && !message ? (
          <div className="flex justify-center my-8">
            <BeatLoader loading={searching} color='#ffffff' size={50} />
          </div>
        ) : message ? (
          <div className="message text-center text-5xl font-bold mt-12 text-red-900">
            {message}
          </div>
        ) : (
          content.map((place) => (
            <WeatherCard
              place={place}
              key={place.name + place.country}
              onChecked={deleteCity}
            />
          ))
        )}
      </div>
    </div>
  );
}
