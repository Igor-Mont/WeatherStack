import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import { MainGrid } from './styles';
import cloudySvg from './assets/cloudy.svg';
import searchImg from './assets/search.svg';
import { kelvinForCelsius } from './utils/kelvinForCelsius';

/* eslint-disable camelcase */
type DataCityProps = {
  weather: [{ description: string }];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
};

function App(): JSX.Element {
  const [dataCity, setDataCity] = useState<DataCityProps>();
  useEffect(() => {
    (async function getData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_TOKEN}`,
      );
      const data = await response.json();
      setDataCity(data);
    })();
  }, []);

  const thermalSensation = dataCity
    ? kelvinForCelsius(dataCity.main.feels_like)
    : 0;

  const tempMin = dataCity ? kelvinForCelsius(dataCity.main.temp_min) : 0;
  const tempMax = dataCity ? kelvinForCelsius(dataCity.main.temp_max) : 0;

  return (
    <MainGrid>
      <GlobalStyle />
      <div className="container">
        <div className="search">
          <label htmlFor="inputSearch">
            <img src={searchImg} alt="Search" />
            <input
              type="text"
              id="inputSearch"
              placeholder="Pesquise sua cidade"
            />
          </label>
        </div>
        <div className="content">
          <div className="left-content">
            <h1>{dataCity?.name}</h1>
            <div className="img-weather">
              <img src={cloudySvg} alt="Cloudy" />
            </div>
            <div className="more-infos">
              <p>Ventos: {dataCity?.wind.speed}</p>
              <p>Umidade: {dataCity?.main.humidity}</p>
            </div>
          </div>
          <div className="right-content">
            <div className="infos">
              <h2>27 ºC</h2>
              <p>Sensação térmica: {Math.floor(thermalSensation)} ºC</p>
              <div className="min-max">
                <p>Min: {Math.floor(tempMin)} ºC</p>
                <p>Max: {Math.floor(tempMax)} ºC</p>
              </div>
            </div>
            <div className="weather">
              <h2>{dataCity?.weather[0].description}</h2>
            </div>
          </div>
        </div>
      </div>
    </MainGrid>
  );
}

export default App;
