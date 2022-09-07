import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> Dallas </p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-Icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">100°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">104°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">15m/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">45%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">10hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
