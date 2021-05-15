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

  console.log("DATA DISPLAY");

  console.log("today is " + tempDay);

  /**
   * BUG IN THE LOOP BELOW
   *
   *SOMETHING TO DO WITH THE NUMBERS NOTMATCHING

   FIND THE ONE WITH THE CURRENT DATE AND START FROM THERE

   number works but nit variable tempday

   */

  list &&
    list.map((a) => {
      let newDate = parseInt(moment(a.dt_txt).format("DD").toString());
      if (tempDay >= newDate) {
        console.log("CHECK");
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
  console.log(fullArray);
  return (
    <>
      <WeatherSlider getData={fullArray} />
    </>
  );
};
export default DataDisplay;
