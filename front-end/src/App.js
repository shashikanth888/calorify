import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import CalculateCalories from "./components/CalculateCalories";
import Footer from "./components/Footer";
import NutritionHistory from "./components/NutritionHistory";
// import FoodFacts from "./components/FoodFacts";
// import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    content: {}
  };

  //Handle field change
  handleChange = data => {
    this.setState({ content: data });
  };

  render() {
    return (
      <div>
        <LandingPage />
        <CalculateCalories handleChange={this.handleChange.bind(this)} />
        <NutritionHistory content={this.state.content} />
        {/* <FoodFacts /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
