import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";

const style = {
  Paper: { padding: 20, margin: 10, marginTop: 40 },
  Button: { padding: 10, marginLeft: 10 },
};

class FoodPreview extends Component {
  state = {};
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md>
          <Paper style={style.Paper}>
            {this.props.foodName} - {parseInt(this.props.foodCalories)} Calories
            in a {this.props.foodPortion} serving.
            <Button color="primary" style={style.Button}>
              Add
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default FoodPreview;
