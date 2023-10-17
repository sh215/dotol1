import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weatherpage.css';
import Sidenav from '../navigation/Sidenav'
import styled from 'styled-components'



function Clock() {
  const [time, setTime] = useState('');
  const Styledh1 = styled.span`font-size: 35px `;
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <Styledh1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;현재 시간과 날씨를 알려드릴게요😊</Styledh1>
     <h2 id="clock">{time}</h2>
    </>
  );
}

function Weather() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;

          const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather',
            {
              params: {
                lat: lat,
                lon: lng,
                units: 'metric',
                appid: '6edee3c2aa182bc44d18ccb204c98a31'
              },
            }
          );
  
          setWeatherData(response.data);
        })
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    }

    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      setLocation(`${weatherData.name} / ${weatherData.coord.lat} / ${weatherData.coord.lon}`);
    }
  }, [weatherData]);

  if (!weatherData) return null;

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  



  const name = weatherData ? weatherData.name : '';
  const lat = weatherData ? weatherData.coord.lat : '';
  const lng = weatherData ? weatherData.coord.lon : '';
  const temp = weatherData ? weatherData.main.temp : '';
  const speed = weatherData ? weatherData.wind.speed : '';
  const main = weatherData ? weatherData.weather[0].main : '';
  



  return (
    <div className='page'>
      <span>현재 위치  :  {name} /  위도  :  {lat} /  경도  :  {lng}</span>
      <span>{main}</span>
      <img className='weatherimg' src={iconUrl} alt="Weather Icon" />
      <span>온도  :   {temp.toFixed(1)}℃</span>
      <span>풍속  :   {speed}m/s</span>
    </div>
  );


}

function Weatherpage() {

  return (
    <>
        <div className="homepage__nav">
         <Sidenav/>
        </div>
        <div>
          
          <Clock />
          <Weather />
        </div>
    </>
  );
}





export default Weatherpage;
