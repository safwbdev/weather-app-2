import React, { Component } from "react";
import cityList from "./city.list.min.json";
import { TextField, AppBar } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DataDisplay from "./DataDisplay";
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
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${this.state.units}&appid=${API_KEY}`
      );
      const response = await api_call.json();
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
      <div className="mainBody">
        <AppBar position="static" color="transparent">
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
