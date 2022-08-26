import WEATHER_API_KEY from "./components/apikey";

export const geoApiOptions = {

  method: "GET",
  headers: {
    "X-RapidAPI-Key": WEATHER_API_KEY ,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
