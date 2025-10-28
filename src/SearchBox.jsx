import { useState } from 'react';
import './SearchBox.css';
import ImagesPage from './ImagesPage';
import HumidityPage from './assets/humidity.png';
import WindImg from './assets/wind.png';

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(23);
  const [wind, setWind] = useState(21);
  const [humid, setHumid] = useState(22);
  const [image, setImage] = useState("CloudsImg");
  const [name, setName] = useState("Ujjain");

  const handleClick = async () => {
    let api_key = "22014699fec3a1753429c30cc641f08e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTemp(data.main.temp);
      setWind(data.wind.speed);
      setImage(data.weather[0].main);
      setName(data.name);
      setHumid(data.main.humidity);
      setCity('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather-container">
      <h2 className="title">Weather App</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>

      <ImagesPage image={image} />

      <div className="weather-info">
        <h1>{Math.round(temp)}°C</h1>
        <h2>{name}</h2>
      </div>

      <div className="details">
        <div className="detail-item">
          <img src={HumidityPage} alt="Humidity" />
          <p>Humidity</p>
          <h3>{humid}%</h3>
        </div>

        <div className="detail-item">
          <img src={WindImg} alt="Wind" />
          <p>Wind</p>
          <h3>{wind}Km/h</h3>
        </div>
      </div>
    </div>
  );
}
