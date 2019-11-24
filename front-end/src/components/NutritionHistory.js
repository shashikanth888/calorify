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
              <ListItem
                primaryText="Potassium (mg)"
                secondaryText={potassium}
              />
              <ListItem primaryText="Sugar (g)" secondaryText={sugar} />
              <ListItem primaryText="Fiber (g)" secondaryText={fiber} />
              <ListItem
                primaryText="Cholesterol (mg)"
                secondaryText={cholesteral}
              />
              <ListItem
                primaryText="Serving Weight (g)"
                secondaryText={serving_weight_grams}
              />
              <ListItem
                primaryText="Saturated Fat (g)"
                secondaryText={saturated_fat}
              />
              <ListItem
                primaryText="Total Fats (g)"
                secondaryText={total_fat}
              />
              <ListItem primaryText="Carbohydrates (g)" secondaryText={carbs} />
              <ListItem primaryText="Calories" secondaryText={calories} />
              <ListItem primaryText="Protein (g)" secondaryText={protein} />
              <ListItem primaryText="Sodium (mg)" secondaryText={sodium} />
            </List>
          </React.Fragment>
        </MuiThemeProvider>
      </section>
    );
  }
}

export default NutritionHistory;
