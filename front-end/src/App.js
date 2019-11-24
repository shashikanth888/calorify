import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
// import CalculateCalories from "./components/CalculateCalories";
// import NutritionHistory from "./components/NutritionHistory";
// import FoodFacts from "./components/FoodFacts";
// import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    // // let userDataForm = document.getElementById("user-from");
    // axios.get(`http://172.30.181.168:3000/api/test`).then(res => {
    //   console.log(res.data.name);
    // });
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
        {/* <CalculateCalories /> */}
        {/* <NutritionHistory /> */}
        {/* <FoodFacts /> */}
      </div>
    );
  }
}

export default App;
