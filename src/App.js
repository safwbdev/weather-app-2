import React, { Component } from "react";
import cityList from "./city.list.min.json";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DataDisplay from "./DataDisplay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const API_KEY = process.env.REACT_APP_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: "metric",
      towns: [],
      weatherData: null,
      selectedTown: null,
    };
  }
  componentDidMount() {
    cityList.map(({ name, country }) => {
      if (country === "MY") {
        let location = name + ", " + country;
        this.setState((prevState) => ({
          towns: [...prevState.towns, location],
        }));
      }
      return null;
    });
  }

  onTownChange = (event, values) => {
    this.setState({
      selectedTown: values,
    });
    this.getWeather(values);
  };

  getWeather = async (location) => {
    // `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${this.state.units}&appid=${API_KEY}`
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${this.state.units}&appid=${API_KEY}`
      );
      const response = await api_call.json();
      // console.log(response);
      this.setState({
        weatherData: response,
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  render() {
    const { towns, weatherData } = this.state;

    return (
      <div>
        <Autocomplete
          id="combo-box-demo"
          options={towns}
          getOptionLabel={(option) => option}
          onChange={this.onTownChange}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
        {weatherData ? (
          <DataDisplay data={weatherData} />
        ) : (
          <h3>Select a town</h3>
        )}
      </div>
    );
  }
}

export default App;
