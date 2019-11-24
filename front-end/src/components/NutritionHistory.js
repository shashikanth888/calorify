import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

class NutritionHistory extends Component {
  render() {
    const {
      content: {
        name,
        potassium,
        sugar,
        fiber,
        cholesteral,
        saturated_fat,
        serving_weight_grams,
        total_fat,
        carbs,
        calories,
        protein,
        sodium
      }
    } = this.props;
    return (
      <section id="section-c">
        <MuiThemeProvider>
          <React.Fragment>
            <List>
              <ListItem primaryText="Name" secondaryText={name} />
              <ListItem primaryText="Potassium" secondaryText={potassium} />
              <ListItem primaryText="Sugar" secondaryText={sugar} />
              <ListItem primaryText="Fiber" secondaryText={fiber} />
              <ListItem primaryText="Cholesterol" secondaryText={cholesteral} />
              <ListItem
                primaryText="Serving Weight"
                secondaryText={serving_weight_grams}
              />
              <ListItem
                primaryText="Saturated Fat"
                secondaryText={saturated_fat}
              />
              <ListItem primaryText="Total Fats" secondaryText={total_fat} />
              <ListItem primaryText="Carbohydrates" secondaryText={carbs} />
              <ListItem primaryText="Calories" secondaryText={calories} />
              <ListItem primaryText="Protein" secondaryText={protein} />
              <ListItem primaryText="Sodium" secondaryText={sodium} />
            </List>
          </React.Fragment>
        </MuiThemeProvider>
      </section>
    );
  }
}

export default NutritionHistory;
