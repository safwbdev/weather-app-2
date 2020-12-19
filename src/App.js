import React, { Component } from "react";
import cityList from "./city.list.min.json";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import ComboBox from "./test";

class App extends Component {
  state = {
    user: "",
    rememberMe: false,
    towns: [],
  };

  componentDidMount() {
    cityList.map(({ name, country }) => {
      if (country === "MY") {
        this.setState((prevState) => ({
          towns: [...prevState.towns, name],
        }));
      }
      return null;
    });
  }

  render() {
    const { towns } = this.state;
    return (
      <div>
        <h1>test</h1>
        <Autocomplete
          id="combo-box-demo"
          options={towns}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
      </div>
    );
  }
}

export default App;
