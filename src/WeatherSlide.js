import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core/";
import Moment from "react-moment";

const WeatherSlide = ({ data }) => {
  console.log("WeatherSlide");
  // console.log(data);
  const currentData = data[0];
  const currentDate = currentData.dt_txt;
  const currentTemp = currentData.main.feels_like + "°C";
  const currentDesc = currentData.weather[0].description;

  return (
    <div>
      <Card className="weatherCard">
        <CardHeader
          title={<Moment format="D MMMM">{currentDate}</Moment>}
          subheader={currentDesc}
        />
        <CardContent className="currentDetails">
          <Typography variant="h3" component="h3">
            {currentTemp}
          </Typography>
        </CardContent>
        <CardContent>
          {data &&
            data.map((test, index) => {
              const getTemp = test.main.temp + "°C";
              const getTime = <Moment format="h A">{test.dt_txt}</Moment>;
              const getImage = (
                <img
                  src={`https://openweathermap.org/img/wn/${test.weather[0].icon}.png`}
                  alt=""
                />
              );
              return (
                <div className="hourRow" key={index}>
                  {getTemp} {getTime} {getImage}
                </div>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
};
export default WeatherSlide;
