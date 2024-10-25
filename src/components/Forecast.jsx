/* eslint-disable react-hooks/exhaustive-deps */
import thunderstorm from "../assets/thunderstorm.png";
import clear_sun from "../assets/clear_sun.png";
import clear_moon from "../assets/clear_moon.png";
import cloud from "../assets/cloud.png";
import cloud_moon from "../assets/cloud_moon.png";
import cloud_sun from "../assets/cloud_sun.png";
import broken_cloud from "../assets/broken_cloud.png";
import mist from "../assets/mist.png";
import snow from "../assets/snow.png";
import shower from "../assets/shower.png";
import shower_moon from "../assets/shower_moon.png";
import shower_sun from "../assets/shower_sun.png";
import temp from "../assets/temp.png";
import humid from "../assets/humid.png";
import pressure from "../assets/pressure.png";
import wind from "../assets/wind.png";
import searchpng from "../assets/search.png";
import cloudiness from "../assets/cloudiness.png";
import sunset from "../assets/sunset.png";
import sunrise from "../assets/sunrise.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Forecast = () => {
  //! Icons for weather
  const allIcons = {
    "01d": clear_sun,
    "01n": clear_moon,
    "02d": cloud_sun,
    "02n": cloud_moon,
    "03d": cloud,
    "03n": cloud,
    "04d": broken_cloud,
    "04n": broken_cloud,
    "09d": shower,
    "09n": shower,
    "10d": shower_sun,
    "10n": shower_moon,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };

  //!All states
  const [weatherData, setWeatherData] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [value, setValue] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [sunriseTime, setSunriseTime] = useState("");
  const [sunsetTime, setSunsetTime] = useState("");
  const [airPollutionData, setAirPollutionData] = useState({});

  //!Search Data fetching
  const search = async (city) => {
    if (city == "") {
      alert("Enter city name");
      window.location.reload();
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_APP_KEY
    }`;
    setLoading(true);
    await axios
      .get(url)
      .then((e) => {
        setWeatherData({
          city: e?.data?.name,
          temp: e?.data?.main?.temp,
          feel: e?.data?.main?.feels_like,
          weather:
            e?.data?.weather[0]?.description.charAt(0).toUpperCase() +
            e?.data?.weather[0]?.description.slice(1),
          humid: e?.data?.main?.humidity,
          pressure: e?.data?.main?.pressure,
          wind: e?.data?.wind?.speed,
          icon: allIcons[e?.data?.weather[0]?.icon],
          timezone: e?.data?.timezone,
          sunrise: e?.data?.sys?.sunrise,
          sunset: e?.data?.sys?.sunset,
          cloudiness: e?.data?.clouds?.all,
        });
        setLatitude(e?.data?.coord?.lat);
        setLongitude(e?.data?.coord?.lon);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.cod + " : " + err.response.data.message);
        window.location.reload();
      });
  };
  useEffect(() => {
    search("Mumbai");
  }, []);

  //!Forecasting Data Fetching
  const handleforecast = async (lat, lon) => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=6&appid=${
      import.meta.env.VITE_APP_KEY
    }&units=metric`;
    await axios(forecastUrl)
      .then((e) => {
        setHourlyForecast(e.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleforecast(latitude, longitude);
    setInterval(handleDate, 1000);
  }, [weatherData]);

  //!handling Date
  const handleDate = () => {
    let date = new Date();
    let timezoneOffset = weatherData.timezone;
    let offsetTime = new Date(date.getTime() + timezoneOffset * 1000);
    setLocalTime(
      offsetTime.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        weekday: "long",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "shortGeneric",
      })
    );
  };
  useEffect(() => {
    setInterval(handleDate(), 1000);
  });

  //!onChange for Input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //! Sunrise Time
  const handleSunriseTime = () => {
    let date = new Date((weatherData.sunrise + weatherData.timezone) * 1000);
    let riseTime = date.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    setSunriseTime(riseTime);
  };
  //! Sunset Time
  const handleSunsetTime = () => {
    let date = new Date((weatherData.sunset + weatherData.timezone) * 1000);
    let setTime = date.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    setSunsetTime(setTime);
  };
  useEffect(() => {
    handleSunriseTime();
    handleSunsetTime();
  }, [weatherData]);

  //! Air pollution api
  const airPollution = async (lat, lon) => {
    let pollutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_APP_KEY
    }`;
    await axios.get(pollutionURL).then((e) => {
      setAirPollutionData({
        co: e?.data?.list[0].components.co,
        nh3: e?.data?.list[0].components.nh3,
        no2: e?.data?.list[0].components.no2,
        no: e?.data?.list[0].components.no,
        o3: e?.data?.list[0].components.o3,
        pm2_5: e?.data?.list[0].components.pm2_5,
        pm10: e?.data?.list[0].components.pm10,
        so2: e?.data?.list[0].components.so2,
      });
    });
  };
  useEffect(() => {
    airPollution(latitude, longitude);
  }, [weatherData]);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="lg:my-5 px-5 lg:px-0 lg:mr-5 lg:h-[calc(100vh-40px)] h-fit w-screen flex flex-col lg:flex-row ">
      <div id="leftForecast" className=" w-full lg:w-[70%] h-full mr-5">
        {/*  Search bar */}
        <div className="h-[50px] lg:h-[6%] w-[100%] mb-[1%] bg-[#393A5A] rounded-xl flex items-center relative">
          <input
            className="h-full w-[80%] bg-[#393A5A] rounded-xl px-5 font-poppins placeholder:font-poppins outline-none text-[#E9E9E9] basis-[80%]"
            type="text"
            placeholder="Search for cities"
            value={value}
            onChange={handleChange}
          />
          <div
            onClick={() => {
              search(value.toLowerCase());
              setValue("");
            }}
            className="bg-[#22222E] h-8 w-8 absolute right-5 flex justify-center items-center rounded-full cursor-pointer"
          >
            <img className="h-5 " src={searchpng} alt="search" />
          </div>
        </div>

        {/* 2nd Data Block */}
        <div className="h-[30%] w-[100%] mb-[1%] rounded-2xl flex justify-evenly items-center p-5">
          <div
            id="weatherDataLeft"
            className="h-full w-fit lg:w-[50%] pl-3 lg:pl-14 flex flex-col justify-center"
          >
            <h1 className="font-black text-3xl lg:text-5xl text-[#E9E9E9]">
              {weatherData.city}
            </h1>
            <h3 className="font-semibold text-lg mt-1 mb-5 text-[#e9e9e99f]">
              {weatherData.weather}
            </h3>
            <h2 className="font-extrabold text-4xl lg:text-6xl text-[#E9E9E9]">
              {Math.floor(weatherData.temp)}&deg;C
            </h2>
          </div>
          <div
            id="weatherDataRight"
            className="h-full w-fit lg:w-[50%] flex items-center justify-center"
          >
            <img
              className="h-44 lg:h-52"
              src={weatherData.icon}
              alt="weather"
            />
          </div>
        </div>

        {/* 3rd Data Block */}
        <div className="h-fit lg:h-[30%] w-[100%] bg-[#393A5A] mb-[1%] rounded-2xl p-5">
          <div className="h-full w-full pb-5">
            <h1 className="text-sm font-poppins font-bold text-[#E9E9E9]">
              TODAY&apos;S FORECAST
            </h1>
            <div className="w-full h-full pt-3">
              <div className=" w-full h-full flex flex-col lg:flex-row">
                {hourlyForecast.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row lg:flex-col justify-between lg:justify-center items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f]"
                    >
                      <h1 className="text-sm lg:text-base font-bold font-poppins text-[#e9e9e99f]">
                        {e.dt_txt.slice(11, 16) > "12:00"
                          ? Number(e.dt_txt.slice(11, 13)) -
                            12 +
                            ":" +
                            e.dt_txt.slice(14, 16)
                          : Number(e.dt_txt.slice(11, 13)) +
                            0o0 +
                            ":" +
                            e.dt_txt.slice(14, 16)}{" "}
                        {e.dt_txt.slice(11, 16) < "12:00" ? "AM" : "PM"}
                      </h1>
                      <img
                        className="h-14"
                        src={allIcons[e.weather[0].icon]}
                        alt="icon"
                      />
                      <h1 className="text-xl font-extrabold font-poppins text-[#E9E9E9]">
                        {Math.floor(e.main.temp)}&deg;C
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4th Data Block */}
        <div className=" h-[200px] lg:h-[30%] w-[100%] bg-[#393A5A] rounded-2xl p-5 lg:mt-0 mt-5">
          <div className="w-full h-full pb-5">
            <h1 className="text-sm font-poppins font-bold text-[#E9E9E9]">
              AIR CONDITIONS
            </h1>
            <div className="w-full h-full flex pt-3">
              <div id="left" className="w-[50%] h-full pl-2 lg:pl-10">
                <div id="temp" className="h-[50%] w-full lg:mb-0  mb-3">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={temp} alt="temperature" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Feels like
                    </span>
                  </div>
                  <h1 className="pl-6 font-poppins font-extrabold text-lg text-[#E9E9E9]">
                    {Math.floor(weatherData.feel)}&deg;C
                  </h1>
                </div>
                <div id="humid" className="h-[50%] w-full">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={humid} alt="Humid" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Humidity
                    </span>
                  </div>
                  <h1 className="pl-6 font-poppins font-extrabold text-lg text-[#E9E9E9]">
                    {weatherData.humid}%
                  </h1>
                </div>
              </div>
              <div id="right" className="w-[50%] h-full pl-2 lg:pl-0">
                <div id="wind" className="h-[50%] w-full lg:mb-0  mb-3">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={wind} alt="Wind" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Wind
                    </span>
                  </div>
                  <h1 className="pl-6 font-poppins font-extrabold text-lg text-[#E9E9E9]">
                    {weatherData.wind} m/s
                  </h1>
                </div>
                <div id="pressure" className="h-[50%] w-full">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={pressure} alt="Pressure" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Pressure
                    </span>
                  </div>
                  <h1 className="pl-6 font-poppins font-extrabold text-lg text-[#E9E9E9]">
                    {weatherData.pressure} hPa
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RightForcast */}
      <div
        id="rightForecast"
        className=" w-full lg:w-[30%] h-[200px] lg:h-full rounded-2xl lg:mt-0 mt-5"
      >
        {/* Time and details */}
        <div className=" h-full lg:h-[50%] w-full bg-[#393A5A] mb-[2%] rounded-2xl p-5 relative">
          <div className=" h-full w-[calc(100%-20px)] absolute">
            <h1 className="text-[#E9E9E9] text-sm lg:text-lg font-poppins font-black w-full">
              {localTime}
            </h1>
            <div className="w-full h-full lg:h-[80%] py-3">
              <div id="cloudiness" className="flex flex-col gap-0">
                <div className="flex items-center">
                  <img
                    className="h-5 lg:h-7"
                    src={cloudiness}
                    alt="cloudiness"
                  />
                  <h1 className="pl-2 text-sm lg:text-base font-poppins font-normal text-[#e9e9e99f]">
                    Cloudiness
                  </h1>
                </div>
                <h1 className="pl-8 lg:pl-10 text-sm lg:text-lg font-poppins text-[#E9E9E9] font-black ">
                  {weatherData.cloudiness}%
                </h1>
              </div>

              <div id="sunrise" className="flex flex-col pt-2">
                <div className="flex items-center">
                  <img className="h-5 lg:h-7" src={sunrise} alt="sunrise" />
                  <h1 className="pl-2 text-sm font-poppins lg:text-base font-normal text-[#e9e9e99f]">
                    Sunrise
                  </h1>
                </div>
                <h1 className="pl-8 lg:pl-10  text-sm lg:text-lg font-poppins text-[#E9E9E9] font-black ">
                  {sunriseTime}
                </h1>
              </div>

              <div id="sunset" className="flex flex-col pt-2">
                <div className="flex items-center">
                  <img className="h-5 lg:h-7" src={sunset} alt="sunset" />
                  <h1 className="pl-2 text-sm font-poppins lg:text-base font-normal text-[#e9e9e99f]">
                    Sunset
                  </h1>
                </div>
                <h1 className="pl-8 lg:pl-10 text-sm lg:text-lg font-poppins text-[#E9E9E9] font-black ">
                  {sunsetTime}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Air Pollution */}
        <div className="h-fit lg:h-[50%] w-full bg-[#393A5A] rounded-2xl p-5 lg:mt-0 mt-5 ">
          <h1 className="text-sm font-poppins font-bold text-[#E9E9E9]">
            AIR POLLUTION
          </h1>
          <div className="h-fit w-full my-3 text-sm lg:text-sm font-poppins">
            <section
              id="left"
              className="w-50% h-full text-[#E9E9E9] space-y-3"
            >
            {/* {
                Object.entries(airPollutionData).map((e,i)=>{
                    return(
                        <h1 key={i} className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  {e[0].toUpperCase()} :
                </span>{" "}
                {e[1]} &#181;m/g<sup>3</sup>
              </h1>
                    )
                })
            } */}
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  CO :
                </span>{" "}
                {airPollutionData.co} &#181;m/g<sup>3</sup>
              </h1>
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  NO :
                </span>{" "}
                {airPollutionData.no} &#181;m/g<sup>3</sup>
              </h1>
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  NO<sub>2</sub> :
                </span>{" "}
                {airPollutionData.no2} &#181;m/g<sup>3</sup>
              </h1>
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  O<sub>3</sub> :
                </span>{" "}
                {airPollutionData.o3} &#181;m/g<sup>3</sup>
              </h1>

              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  SO<sub>2</sub> :
                </span>{" "}
                {airPollutionData.so2} &#181;m/g<sup>3</sup>
              </h1>
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  PM<sub>10</sub> :
                </span>{" "}
                {airPollutionData.pm10} &#181;m/g<sup>3</sup>
              </h1>
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  PM<sub>2.5</sub> :
                </span>{" "}
                {airPollutionData.pm2_5} &#181;m/g<sup>3</sup>
              </h1>
              <h1 className=" text-sm lg:text-[15px] font-poppins font-extrabold text-[#E9E9E9]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  NH<sub>3</sub> :
                </span>{" "}
                {airPollutionData.nh3} &#181;m/g<sup>3</sup>
              </h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
