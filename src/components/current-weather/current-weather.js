import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city"> Dallas </p>
        <p className="weather-description">Sunny</p>
      </div>
      <img alt="weather" className="weather-Icon" src=""/>
    </div>
  );
}

export default CurrentWeather;
