import React from "react";
// import weatherData from "../weatherData";

const WeatherForecast = (props) => {
    return (
            <div className="weather">
            <img src={props.img} className="card-img-top" alt="..." />
            <h2 className="condition">{props.conditions}</h2><br/>
            {props.time}
            
            </div>
    )
}

export default WeatherForecast