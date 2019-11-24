import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import CalculateCalories from "./components/CalculateCalories";
import Footer from "./components/Footer";
// import NutritionHistory from "./components/NutritionHistory";
// import FoodFacts from "./components/FoodFacts";
// import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    Potassium: "",
    Suger: "",
    Fiber: "",
    Cholesterol: "",
    SaturatedFats: "",
    Name: "",
    ServingWeight: "",
    Fats: "",
    Carbohydrates: "",
    Calories: "",
    Protein: "",
    Nutrients: "",
    Sodium: "",
    Day: ""
  };

  //Handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      Potassium,
      Sugar,
      Fiber,
      Cholesterol,
      SaturatedFats,
      Name,
      ServingWeight,
      Fats,
      Carbohydrates,
      Calories,
      Protein,
      Nutrients,
      Sodium,
      Day
    } = this.state;

    return (
      <div>
        <LandingPage />
        <CalculateCalories handleChange={this.handleChange} />
        {/* <NutritionHistory /> */}
        {/* <FoodFacts /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
