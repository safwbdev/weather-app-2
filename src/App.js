import React, { Component } from "react";
import cityList from "./city.list.min.json";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY = process.env.REACT_APP_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      towns: [],
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
    this.getWeather();
  };

  getWeather = async () => {
    const api_call = await fetch(
      // `http://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${API_KEY}`
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedTown}&appid=${API_KEY}`
    );
    const response = await api_call.json();

    console.log(response);
  };

  render() {
    const { towns, selectedTown } = this.state;
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
        <h1>{selectedTown}</h1>
      </div>
    );
  }
}

export default App;
