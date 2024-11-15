import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";

const API_KEY = "8fef9523b1af10072dfb639e15bf8b39";

const Tablet = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(`lat=${latitude}&lon=${longitude}`);
        },
        (err) => {
          setError(
            "Unable to retrieve your location. Please search for a city."
          );
          console.error(err);
        }
      );
    } else {
      setError(
        "Geolocation is not supported by your browser. Please search for a city."
      );
    }
  };

  const fetchWeatherData = async (query) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather({
        city: data.name,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });
      setError("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
    }
  };

  const handleSearch = async () => {
    if (city.trim() !== "") {
      fetchWeatherData(`q=${city}`);
    }
  };

  return (
    <section className="w-full flex justify-center  lg:w-2/6 lg:h-5/5 bg-slate-300 bg-opacity-50 rounded-lg font-orbitron">
      <div className="flex flex-col items-center w-full">
        <div className="mt-5 flex items-center justify-center ">
          <FaLocationDot className="bg-white rounded-l-lg h-full size-8 pl-3 text-slate-600" />
          <input
            className="px-12 py-3 text-lg text-slate-600 rounded-r-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {error && <p className="text-red-400 ">{error}</p>}

        {weather && (
          <h2 className="font-bold text-4xl text-slate-600 py-5">
            {weather.city}
          </h2>
        )}

        {weather && (
          <div className="w-full flex flex-col justify-center items-center">
            <p className=" font-semibold  text-slate-600 text-5xl mt-5">
              <img className="w-28" src={cloud} /> {weather.temperature}°c
            </p>
            <span className="flex flex-row justify-between items-center w-full px-12 pb-5">
              <p className="text-slate-600 font-semibold">
                <img className="w-12" src={humidity} />
                humidity
                <p className="font-bold  text-2xl text-slate-600">
                  {weather.humidity}%
                </p>
              </p>
              <p className="text-slate-600 font-semibold">
                <img className="w-12" src={wind} />
                wind speed
                <p className="font-bold > text-2xl text-slate-600">
                  {" "}
                  {weather.windSpeed}km/h
                </p>
              </p>
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
export default Tablet;
