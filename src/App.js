import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast"




export default function App() {
  const Weather = weatherData.map((forecast, index) => {
    return (
      <WeatherForecast
      key={index}
      img={forecast.img}
      conditions={forecast.conditions}
      time={forecast.time}
      />
    )
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section className="Weather">{Weather}</section>
    </div>
  );
}
