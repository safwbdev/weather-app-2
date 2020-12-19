import React, { Component } from "react";
import cityList from "./city.list.min.json";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      rememberMe: false,
      towns: [],
      selectedTown: null,
    };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

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

  onTagsChange = (event, values) => {
    this.setState(
      {
        selectedTown: values,
      },
      () => {
        // This will output an array of objects
        // given by Autocompelte options property.
        console.log(this.state.selectedTown);
      }
    );
  };

  render() {
    const { towns, selectedTown } = this.state;
    return (
      <div>
        <h1>{selectedTown}</h1>
        <Autocomplete
          id="combo-box-demo"
          options={towns}
          getOptionLabel={(option) => option}
          onChange={this.onTagsChange}
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
