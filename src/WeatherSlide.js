import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function WeatherSlide({ data }) {
  const { main, weather } = data;
  console.log(main);
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <Moment format="DD MMM">{data.dt_txt}</Moment> |{" "}
          <Moment format="HH:mm A">{data.dt_txt}</Moment>
        </Typography>
        <Typography variant="h4">{main.temp}°C</Typography>
        <div className="temperatures">
          <ArrowDropUpIcon />
          {main.temp_min}°C <ArrowDropDownIcon />
          {main.temp_max}°C
        </div>
        <div className="weather-details">
          <img
            src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
            alt=""
          />
          <div className="weather_text">
            <Typography variant="h6">{weather[0].main}</Typography>
            <Typography variant="body2" component="p">
              {weather[0].description}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
