import React, { Component } from "react";
import cityList from "./city.list.min.json";
import { TextField, Typography, Toolbar } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DataDisplay from "./DataDisplay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppBar } from "@material-ui/core";
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
    console.log("TESTING");
    console.log(values);
    if (values) {
      this.setState({
        selectedTown: values,
      });
      this.getWeather(values);
    }
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
    // console.log(towns);

    return (
      <div className="mainBody">
        <AppBar position="static" color="transparent">
          {/* <Toolbar> */}
          {/* <Typography variant="h6">Weather</Typography> */}
          <Autocomplete
            id="combo-box-demo"
            options={towns}
            getOptionLabel={(option) => option}
            onChange={this.onTownChange}
            disableClearable
            className="comboBox"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select an Area"
                variant="outlined"
              />
            )}
          />
          {/* </Toolbar> */}
        </AppBar>
        <div className={weatherData ? "weatherBody" : "noBody"}>
          {weatherData ? (
            <DataDisplay data={weatherData} />
          ) : (
            <h3>Select an Area</h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;
