import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function WeatherSlide({ data }) {
  const { main, weather } = data;
  //   console.log(main);
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {data.dt_txt}
        </Typography>
        <Typography variant="h5" component="h2">
          {main.temp}
        </Typography>
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt=""
        />
        <Typography color="textSecondary">{weather[0].main}</Typography>
        <Typography variant="body2" component="p">
          {weather[0].description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
