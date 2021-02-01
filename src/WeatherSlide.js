import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core/";
import Moment from "react-moment";

export default function WeatherSlide({ data }) {
  // console.log(data);
  const currentDate = data[0].dt_txt;
  const currentTemp = data[0].main.feels_like + "°C";
  const currentDesc = data[0].weather[0].description;
  const currentImage = (
    <img
      src={`http://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`}
      alt=""
    />
  );
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
                  src={`http://openweathermap.org/img/wn/${test.weather[0].icon}.png`}
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
}
