import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

class FoodPreview extends Component {
  state = {
    foodOne: "Banana",
    foodTwo: "Apple",
  };
  render() {
    return (
      <Grid container>
        <Grid item sm>
          <Paper style={style.Paper}>{this.state.foodOne}</Paper>
          <Paper style={style.Paper}>{this.state.foodTwo}</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default FoodPreview;
