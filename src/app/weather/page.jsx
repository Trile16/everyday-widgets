"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
require("dotenv").config();

export default function Weather() {
  const [city, setCity] = useState("Metairie");
  const [tempUnit, setTempUnit] = useState("imperial");
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.NEXT_PUBLIC_WEATHERAPIKEY}&units=${tempUnit}`
      );
      const result = await response.json();
      console.log(result);
      setCityWeather(result);
    }
    getWeather();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue to-purple rounded-xl p-8 w-5/6 max-w-xl h-5/6 flex flex-col justify-between items-center">
      <h1 className="text-4xl/8 p-8 text-center">Weather</h1>
      <form
        className="w-full flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          async function getWeather() {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.NEXT_PUBLIC_WEATHERAPIKEY}&units=${tempUnit}`
            );
            const result = await response.json();
            console.log(result);
            setCityWeather(result);
          }
          getWeather();
        }}
      >
        <input
          type="text"
          placeholder="Enter City Name"
          className="m-0 h-8 text-gray-dark"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="w-10">
          <Image
            src="/search.png"
            width={50}
            height={50}
            alt="search"
            className="p-2"
          />
        </button>
      </form>
      {cityWeather?.main ? (
        <div className="h-5/6 w-2/3 flex flex-col justify-around">
          <div className="w-full flex flex-col items-center -4">
            <Image
              src={"/" + cityWeather?.weather[0]?.main + ".png"}
              width={100}
              height={100}
              alt="rain"
            />
            <h1 className="text-xl">{cityWeather?.main?.temp}°F</h1>
            <h2 className="text-2xl">{cityWeather?.name}</h2>
          </div>
          <div className="w-full flex justify-around">
            <div className="col">
              <Image
                src="/humidity.png"
                width={100}
                height={100}
                alt="humidity"
              />
              <p className="humidity">{cityWeather?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="col">
              <Image src="/wind.png" width={100} height={100} alt="wind" />
              <p className="wind">{cityWeather?.wind?.speed} mph</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full">City Not Found...</div>
      )}
      <Link
        href="/"
        className="bg-blue w-fit rounded-xl m-4 w-1/6 text-center border-2 transition hover:border-green"
      >
        Home
      </Link>
    </div>
  );
}
