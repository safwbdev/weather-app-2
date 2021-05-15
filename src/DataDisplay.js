import React from "react";
import WeatherSlider from "./WeatherSlider";
import moment from "moment";

const DataDisplay = ({ data: { list } }) => {
  let tempDay = "";
  let initDate = new Date();
  let today = initDate.getDate();
  tempDay = parseInt(today);
  let filter = [];
  let fullArray = [];
  let getArrays = [];

  list &&
    list.map((a) => {
      let newDate = parseInt(moment(a.dt_txt).format("DD").toString());
      if (tempDay >= newDate) {
        filter = list.filter(
          (i) => parseInt(moment(i.dt_txt).format("DD")) === newDate
        );
        return null;
      } else {
        tempDay++;
        fullArray = [...fullArray, filter];
        getArrays = [];
        filter = [];
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
