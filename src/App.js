import React, { Component } from 'react';

//Components
import Form from './Components/Form';
import WeatherInfo from './Components/WeatherInfo';

class App extends Component {

  state = {
    weather: '',
    humidity: '',
    temperature: '',
    wind: '',
    error: null
  }

//GET INPUTS VALUE

  getWeather = e => {
    e.preventDefault();
    const {country, city} = e.target.elements;
    const countryValue = country.value;
    const cityValue = city.value;

    this.Validation(countryValue, cityValue);
  }

//VALIDATION DATE

  Validation = (countryValue, cityValue) => {

    if(/\s/.test(countryValue) && /\s/.test(cityValue)){

      this.setState({
        error: 'Porfavor escribe un pais y una ciudad'
      });

    }else{
      this.setState({
        error: null
      });
      this.Post(countryValue, cityValue);       

    }
  }

//REQUEST DATAS 
  
  Post = async (country, countryCode) => {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country},${countryCode}&appid=0bbb934f3ee9fa0da639104766296e9b&units=metric`);
    const data = await res.json();

    this.setState({
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      temperature: data.main.temp,
      wind: data.wind.speed
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
