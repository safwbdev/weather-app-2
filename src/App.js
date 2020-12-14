import React, { Component } from "react";
import cityList from './city.list.min.json'
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
        {cityList.map((data,index)=>{
return <p>{data.name} - {data.country}</p>
        })}
      </form>
    );
  }
}

export default App;
