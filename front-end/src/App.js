import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import CalculateCalories from "./components/CalculateCalories";
// import NutritionHistory from "./components/NutritionHistory";
// import FoodFacts from "./components/FoodFacts";
// import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <CalculateCalories />
        {/* <NutritionHistory /> */}
        {/* <FoodFacts /> */}
      </div>
    );
  }
}

export default App;
