import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    // let userDataForm = document.getElementById("user-from");
    axios.get(`http://172.30.181.168:3000/api/test`).then(res => {
      console.log(res.data.name);
    });

    // fetch("http://172.30.181.168:3000/api/test")
    //   .then(response => {
    //     console.log(response.json());
    //   })
    //   .then(json => {
    //     this.setState({
    //       user: json
    //     });
    //   });
  }

  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default App;
