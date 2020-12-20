import React from "react";
import Slider from "./Slider";
export default function DataDisplay({ data }) {
  // base: "stations"
  // clouds: {all: 20}
  // cod: 200
  // coord: {lon: 99.84, lat: 6.33}
  // dt: 1608395100
  // id: 1222396
  // main: {temp: 26.84, feels_like: 31.01, temp_min: 26.67, temp_max: 27, pressure: 1012, …}
  // name: "Kuah"
  // sys: {type: 1, id: 9436, country: "MY", sunrise: 1608420338, sunset: 1608462653}
  // timezone: 28800
  // visibility: 10000
  // weather: [{…}]
  // wind: {speed: 2.1, deg: 50}

  //   {cod: "200", message: 0, cnt: 40, list: Array(40), city: {…}}
  // city: {
  //     coord: {lat: 2.7379, lon: 101.7235}
  // country: "MY"
  // id: 7697719
  // name: "Ladang Lothian"
  // population: 0
  // sunrise: 1608419511
  // sunset: 1608462576
  // timezone: 28800
  // }
  // cnt: 40
  // cod: "200"
  // list: Array(40){
  // 0:
  // clouds: {all: 59}
  // dt: 1608433200
  // dt_txt: "2020-12-20 03:00:00"
  // main: {temp: 300.22, feels_like: 305.26, temp_min: 300.22, temp_max: 301.58, pressure: 1011, …}
  // pop: 0.8
  // rain: {3h: 0.82}
  // sys: {pod: "d"}
  // visibility: 10000
  // weather: [{…}]
  // wind: {speed: 0.54, deg: 351}
  // __proto__: Object
  // },
  // {
  // 1:
  // clouds: {all: 83}
  // dt: 1608444000
  // dt_txt: "2020-12-20 06:00:00"
  // main: {temp: 300.88, feels_like: 305.51, temp_min: 300.88, temp_max: 301.42, pressure: 1010, …}
  // pop: 1
  // rain: {3h: 4.71}
  // sys: {pod: "d"}
  // visibility: 5270
  // weather: [{…}]
  // wind: {speed: 1.48, deg: 7}
  // __proto__: Object
  // }

  const { city, list } = data;
  //   const { coord, country, name, population, sunrise, sunset, timezone } = city;
  const { name } = city;

  return (
    <div>
      {/* <h2>{temp}</h2>
      <h2>{feels_like}</h2>
      <h2>{temp_min}</h2>
      <h2>{temp_max}</h2>
      <h2>{pressure}</h2> */}
      <h2>{name}</h2>
      <Slider data={list} />
    </div>
  );
}
