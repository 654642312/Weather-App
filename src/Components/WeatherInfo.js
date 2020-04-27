import React from 'react';
import './styles/WeatherInfo.css';

const WeatherInfo = props => {
    return (
        <div>
            {
                props.error &&
                <div className="card-red">
                    <p>{props.error}</p>
                </div> 
            }
            <div className="card">
                <p>Weather: {props.weather}</p>
                <p>Humidity: {props.humidity}</p>
                <p>Temperature: {props.temperature}</p>
                <p>Wind Speed: {props.wind}</p>
            </div>
        </div>
    )
}

export default WeatherInfo