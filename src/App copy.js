import React, { Component } from "react";
import cityList from "./city.list.min.json";
import Autosuggest from "react-autosuggest";
import ComboBox from "./test";

class App extends Component {
  state = {
    user: "",
    rememberMe: false,
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User:{" "}
          <input
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        <button type="submit">Sign In</button>
        {cityList.map(({ name, country }, index) => {
          if (
            country === "MY"
            // country === "SG" ||
            // country === "TH" ||
            // country === "ID"
          )
            return (
              <p>
                {name} - {country}
              </p>
            );
        })}
        {/* <ComboBox /> */}
      </form>
    );
  }
}

export default App;
