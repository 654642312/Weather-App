import React from 'react';
import './styles/WeatherInfo.css';

const WeatherInfo = props => (
    <div className="weather-info">
        <p>Weather: {props.weather}</p>
        <p>Humidity: {props.humidity}</p>
        <p>Temperature: {props.temperature}</p>
    </div>
)

export default WeatherInfo