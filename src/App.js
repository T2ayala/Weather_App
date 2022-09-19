import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";


function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.sp(" ");

const CurrentWeatherFetch = fetch(`/weather?lat={lat}&lon={lon}&appid={API key}`)

  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
