import React from "react";
import WeatherSlider from "./WeatherSlider";
import moment from "moment";
import { Typography } from "@material-ui/core";
export default function DataDisplay({ data }) {
  const { city, list } = data;
  const { name } = city;
  let tempDay = "";
  let initDate = new Date();
  let today = initDate.getDate();
  tempDay = parseInt(today);
  let fullArray = [];
  let getArrays = [];
  list &&
    list.map((a) => {
      if (tempDay === parseInt(moment(a.dt_txt).format("DD").toString())) {
        getArrays = [...getArrays, a];
        return null;
      } else {
        tempDay++;
        fullArray = [...fullArray, getArrays];
        getArrays = [];
        return null;
      }
    });
  return (
    <div>
      {/* <Typography variant="h5" component="h5">
        {name}
      </Typography> */}
      <WeatherSlider getData={fullArray} />
    </div>
  );
}
