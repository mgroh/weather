import React from 'react';
import {connect} from "react-redux";

const WeatherResult = (props) =>
  <div>
    {props.loading && <p>loading...</p>}
    {props.error && <p>An error occurred: {props.error.message}</p>}
    {props.weather && <p>Last update: {props.weather.time}</p>}
    {props.weather && <p>Wind degrees: {props.weather.wind}</p>}
    {props.weather && <p>Temp Cº: {props.weather.temp}</p>}
  </div>;

  const getWeather = (result) => {
    if (result === null) {
      return null;
    }
    const {current_observation} = result;
    const {observation_time_rfc822, wind_degrees, temp_c} = current_observation;
    return {
      time: observation_time_rfc822,
      wind: wind_degrees,
      temp: temp_c
    };
  };

const mapStateToProps = (state) => ({
  weather: getWeather(state.weather.result),
});

export default connect(mapStateToProps)(WeatherResult);
