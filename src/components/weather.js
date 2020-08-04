import React from 'react';
import WeatherWidget from '@eggtronic/react-weather-widget';
//test
export default function Basic() {
  const key = '9e2990919ec33dcf92880e5e65fe9a26'; // your openweathermap api key

  return <WeatherWidget apiKey={key} />;
}
