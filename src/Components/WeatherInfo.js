import React from 'react';

const WeatherInfo = props => (
    <div>
        <p>Weather: {props.weather}</p>
        <p>Humidity: {props.humidity}</p>
        <p>Temperature: {props.temperature}</p>
    </div>
)

export default WeatherInfo