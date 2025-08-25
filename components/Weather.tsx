import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";

export function Weather() {
  return (
    <div className="container bg-white">
      <h1 className="title">Weather</h1>
      <div className="flex flex-col gap-4 h-3/4">
        <WeatherList
          city="Casius"
          country="Mars"
          time="12AM"
          temp={85}
          weather="Sunny"
          bgColor="bg-white"
        />
        <WeatherList
          city="Dlacria"
          country="Mars"
          time="12AM"
          temp={85}
          weather="Cloudy"
          bgColor="bg-amber-400"
        />
        <WeatherList
          city="New York"
          country="USA"
          time="12AM"
          temp={28}
          weather="Sunny"
          bgColor="bg-cyan-400"
        />
        <WeatherList
          city="Zomato"
          country="Mars"
          time="12AM"
          temp={20}
          weather="Cloudy"
          bgColor="bg-rose-400"
        />
      </div>
      <div className="flex justify-center">
        <Button size="size-20">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}

export function WeatherList({
  city,
  country,
  time,
  weather,
  temp,
  bgColor,
}: {
  city: string;
  country: string;
  time: string;
  weather: "Sunny" | "Cloudy";
  temp: number;
  bgColor: string;
}) {
  return (
    <div
      className={`${bgColor} w-full h-24 border-4 border-black shadow-[0_4px_0_0_#000000] rounded-2xl p-4 flex justify-between items-center transition-all hover:scale-105 active:scale-110`}
    >
      <div>
        <h2 className="text-2xl font-bold">{city}</h2>
        <span className="font-bold">
          {country}, {time}
        </span>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <WeatherIcon weather={weather} />
        <span className="text-4xl font-bold">{temp}°</span>
      </div>
    </div>
  );
}

export function WeatherIcon({ weather }: { weather: "Sunny" | "Cloudy" }) {
  switch (weather) {
    case "Sunny":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>
      );
    case "Cloudy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>
      );
  }
}
