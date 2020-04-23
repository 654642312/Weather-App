import React, { Component } from 'react';

//Components
import Form from './Components/Form';
import WeatherInfo from './Components/WeatherInfo';

class App extends Component {

  state = {
    weather: '',
    humidity: '',
    temperature: ''
  }

  getWeather = e => {
    e.preventDefault();
    const {country, countryCode} = e.target.elements;
    const countryValue = country.value;
    const countryCodeValue = countryCode.value;

    this.Post(countryValue, countryCodeValue);
  }

  Post = async (country, countryCode) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country},${countryCode}&appid=0bbb934f3ee9fa0da639104766296e9b&units=metric`);
    const data = await res.json();
    console.log(data);

    this.setState({
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      temperature: data.main.temp
    });
  }

  render(){
    return (
      <div>
        <Form getWeather={this.getWeather}/>
        <WeatherInfo {...this.state}/>
      </div>
    );
  }
}

export default App;
