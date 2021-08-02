import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import { MainGrid } from './styles';
import cloudySvg from './assets/cloudy.svg';

function App(): JSX.Element {
  useEffect(() => {
    (async function getData() {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=47a7ed1ad686d073ab4b1136cc562176',
      );
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <MainGrid>
      <GlobalStyle />
      <div className="content">
        <div className="left-content">
          <h1>London</h1>
          <div className="img-weather">
            <img src={cloudySvg} alt="Cloudy" />
          </div>
          <div className="more-infos">
            <p>Ventos: 21</p>
            <p>Umidade: 21</p>
          </div>
        </div>
        <div className="right-content">
          <div className="infos">
            <h2>27 ºC | ºF</h2>
            <p>Sensação térmica: 29º C</p>
            <div className="min-max">
              <p>Min: 20</p>
              <p>Max: 30</p>
            </div>
          </div>
          <div className="weather">
            <h2>Nublado</h2>
          </div>
        </div>
      </div>
    </MainGrid>
  );
}

export default App;
