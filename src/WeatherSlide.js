import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { WatchRounded } from "@material-ui/icons";
// import moment from 'moment'
export default function WeatherSlide({ data }) {
  //   const { main, weather } = data;
  //   const array = data[0];
  console.log(data);
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <Moment format="DD MMMM">{data[0].dt_txt}</Moment>
          {data &&
            data.map((test, index) => {
              return (
                <div>
                  <img
                    src={`http://openweathermap.org/img/w/${test.weather[0].icon}.png`}
                    alt=""
                  />
                  {test.main.temp}°C - {test.weather[0].main} -{" "}
                  <Moment format="hh:mm A">{test.dt_txt}</Moment>
                </div>
              );
            })}
        </Typography>
        {/* <Typography color="textSecondary" gutterBottom>
          <Moment format="DD MMM">{data.dt_txt}</Moment> |{" "}
          <Moment format="HH:mm A">{data.dt_txt}</Moment>
        </Typography> */}
        {/* <Typography variant="h4">{main.temp}°C</Typography> */}
        {/* <div className="temperatures">
          <ArrowDropUpIcon />
          {main.temp_min}°C <ArrowDropDownIcon />
          {main.temp_max}°C
        </div> */}
        {/* <div className="weather-details">
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
        </div> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
