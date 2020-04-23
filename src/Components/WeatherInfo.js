import React from 'react';

const WeatherInfo = props => (
    <div style={center}>
        <p>Weather: {props.weather}</p>
        <p>Humidity: {props.humidity}</p>
        <p>Temperature: {props.temperature}</p>
    </div>
)

const center = {
    textAlign: 'center'
}

export default WeatherInfo