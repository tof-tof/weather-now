import { useState } from 'react';
import './assets/css/tailwind.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Components/Loader';
import WeatherCard from './Components/WeatherCard';
import useAxiosGet from './Hooks/HttpRequests';

function App() {
  const [cityList, setCityList] = useState([])
  const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6a704e11e672d58e61bc84715b062d59`;
  const city = useAxiosGet(url);
  let content = null;
  if (city.error) {
    content = <p> there was an error</p>
  }
  if (city.loading) {
    content = <Loader />
  }
  if (city.data) {
    content =<WeatherCard
      name={city.data.name}
      country={city.data.sys.country}
      description={city.data.description}
      temp={city.data.main.temp}
      temp_min={city.data.main.temp_min}
      temp_max={city.data.main.temp_max}
      humidity={city.data.main.humidity}
      cloudiness={city.data.clouds.all}
      windSpeed={city.data.wind.speed}
      windDirection={city.data.wind.deg}

    />
  }
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-500">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
