import React from "react";
import WeatherSlider from "./WeatherSlider";
import moment from "moment";

const DataDisplay = ({ data: { list } }) => {
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
    <>
      <WeatherSlider getData={fullArray} />
    </>
  );
};
export default DataDisplay;
